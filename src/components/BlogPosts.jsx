import { useLayoutEffect, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Alla Scoperta delle Meraviglie Nascoste"
  },
  {
    id: 2,
    title: "Come Viaggiare con un Budget Ridotto"
  },
  {
    id: 3,
    title: "Diario di Viaggio: Esperienze Indimenticabili"
  },
  {
    id: 4,
    title: "I Migliori Posti per un Weekend Romantico"
  },
  {
    id: 5,
    title: "Viaggiare da Soli: Consigli e Suggerimenti"
  } 
  ];

  export default function BlogPost() {

    const [posts, setPosts] = useState(blogPosts);
    const [newPost, setNewPost] = useState('');

    const addPost = e => {
        e.preventDefault();

        const newPostObject = {
          id: posts.length === 0 ? 1 : posts[posts.length - 1].id + 1,
          title: newPost
        };
    
        const updatedPosts = [...posts, newPostObject];
        setPosts(updatedPosts);
        setNewPost('');
      }

      const removePost = i => {
        const updatedPosts = posts.filter((post,index) => {
          return index != i
        });
        setPosts(updatedPosts);
      }

      const handleKeyDown = event => {
        if (event.key ==="Enter" && event.ctrlKey) {
          event.preventDefault();
          addPost(event);
        }
      };

      return (
        <>
        <div className="main-wrapper">
          {posts.length === 0 ? <p className="empty-message">La lista è vuota</p> :
          <ul className="posts-list">
            {posts.map((post, i) => (
              <li className="post" key={post.id}>
                <p>{post.title}</p>
                <button className="remove" onClick={() => removePost(i)}>
                  X
                </button>
              </li>
            ))}

          </ul>
          
          }
          <div className="right-wrapper">
            <p className="textarea-caption">AGGIUNGI VIAGGIO</p>
            <form onSubmit={addPost}>
              <textarea type="text" value={newPost} onKeyDown={handleKeyDown}
              onChange={event => { setNewPost(event.target.value) }}
              
              />
              <button>Invia</button>
            </form>

          </div>



        </div>

        </>
      
      )


  }