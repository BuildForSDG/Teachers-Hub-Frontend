/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import moment from "moment";

export const Comment = (props) => (
  <div>
    <div>
      <div>
        <div className="comment-wrapper">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="text-black">Discussion</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={props.onSubmit}>
                <textarea
                  className="form-control"
                  placeholder="write a comment..."
                  rows="6"
                  cols="30"
                  name="comment_body"
                  onChange={props.onChange}
                  value={props.CommentBody}
                ></textarea>
                <br />
                <input type="submit" className="btn btn-primary pull-right" value="ADD COMMENT" />
              </form>
              <div className="clearfix"></div>
              <hr />
              <ul className="media-list">
                {props.data.data.comments
                  ? props.data.data.comments.map((comment, index) => (
                      <li key={index} className="media">
                        <div className="media-body">
                          <span className="text-muted pull-right">
                            <small className="text-muted">
                              {moment(comment.comment_date_added).startOf("hour").fromNow()}
                            </small>
                          </span>
                          <strong className="text-success">
                            <a href="#">@{comment.comment_author}</a>
                          </strong>
                          <p>{comment.comment_body}</p>
                        </div>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
