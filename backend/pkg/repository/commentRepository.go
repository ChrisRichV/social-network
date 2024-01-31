package repository

import (
	"backend/pkg/model"
	"database/sql"
	"fmt"
)

func GetCommentsByID(db *sql.DB, id int) ([]model.Comment, error) {
    query := `SELECT * FROM comments WHERE post_id = ? OR user_id = ?`
    rows, err := db.Query(query, id, id)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var comments []model.Comment
    for rows.Next() {
        var comment model.Comment
        if err := rows.Scan(&comment.Content, &comment.CreatedAt, &comment.PostID, &comment.UserID); err != nil {
            return nil, err
        }
        comments = append(comments, comment)
    }

    if err = rows.Err(); err != nil {
        return nil, err
    }

    return comments, nil
}

func CreateComment(db *sql.DB, comment model.Comment) (int64, error) {
	query := `INSERT INTO comments (post_id, user_id, content) 
	VALUES (?, ?, ?)`
	result, err := db.Exec(query, comment.PostID, comment.UserID, comment.Content)
	if err != nil {
		return 0, err
	}
	lastInsertID, err := result.LastInsertId()
	if err != nil {
		fmt.Println("Error getting last inserted comment id")
	}
	return lastInsertID, nil
}