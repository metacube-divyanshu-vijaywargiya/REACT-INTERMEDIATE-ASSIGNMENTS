import React, { useEffect, useState } from "react";
import useTheme from "../Contexts/ThemeContext";
import axios from "axios";
import "./PostTable.css";
function PostTable() {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const { themeMode } = useTheme();
  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((finalRes) => {
        setPosts(finalRes.posts);
        console.log(finalRes);
      })
      .finally(() => {
        setIsPostLoading(false);
      });
  }, []);

  const removePost = (postId) => {
    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((finalRes) => {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post.id !== finalRes.id)
        );
        console.log(finalRes);
      });
  };

  const handleEditClick = (postId, title) => {
    setCurrentPostId(postId);
    setPostTitle(title);
    setIsEditing(true);
  };

  //to handle form submit button for update and add
  const handleSubmitForm = (e) => {
    e.preventDefault();
    //if we are editing a post
    if (isEditing) {
      axios.put(`https://dummyjson.com/posts/${currentPostId}`, {
          title: postTitle,
        }).then((response) => {
          console.log(response);
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === currentPostId ? { ...post, title: response.data.title } : post
            )
          );
          setIsEditing(false);
          setCurrentPostId(null);
          setPostTitle("");
        });
    } else {
      // Add new post
      axios
        .post("https://dummyjson.com/posts/add", {
          title: postTitle,
          userId: 1, 
        })
        .then((response) => {
          console.log(response);
          setPosts((prevPosts) => [...prevPosts, response.data]);
          setCurrentPostId(null);
          setPostTitle("");
        })
    }
  };

  return (
    <div className="table-container">
      <h2
        className={
          themeMode == "light" ? "text_color_dark" : "text_color_light"
        }
      >
        Posts List
      </h2>
      {isPostLoading ? (
        <p>Loading...</p>
      ) : (
        <>
            <form onSubmit={handleSubmitForm} className="update_post_form">
              <input
                className="update_input_title"
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder= {isEditing ? "Updated Title" : "New Title"}
                required
              />
              <button type="submit" className="button">
                {isEditing ? "Update Post" : "Add Post"}
              </button>
            </form>
          {posts.length > 0 ? (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Remove</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((post, index) => (
                  <tr
                    key={index}
                    className={
                      themeMode == "light"
                        ? "text_color_dark"
                        : "text_color_light"
                    }
                  >
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          removePost(post.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleEditClick(post.id, post.title);
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p
              className={
                themeMode == "light"
                  ? "text_color_dark no_students"
                  : "text_color_light no_students"
              }
            >
              No Posts found.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default PostTable;
