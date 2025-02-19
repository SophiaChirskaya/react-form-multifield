import {useState} from "react";

const blogPosts = [
    {
      id: 1,
      title: "Alla Scoperta delle Meraviglie Nascoste",
      author: "Ann Swan",
      content: "Scopri cinque luoghi poco conosciuti in Europa",
      category: "Europe"
    },
    {
      id: 2,
      title: "Come Viaggiare con un Budget Ridotto",
      author: "Brian Li",
      content: "Ecco alcuni consigli su voli economici, alloggi alternativi",
      category: "Africa"
    },
    {
      id: 3,
      title: "Diario di Viaggio: Esperienze Indimenticabili",
      author: "Chloe Chang",
      content: "Dalla Route 66 in USA: le strade più spettacolari da percorrere in auto o moto",
      category: "America"
    },
    {
      id: 4,
      title: "I Migliori Posti per un Weekend Romantico",
      author: "Dan Brown",
      content: "Pad thai di Bangkok: un viaggio attraverso i migliori street food",
      category: "Asia"
    },
    {
      id: 5,
      title: "Viaggiare da Soli: Consigli e Suggerimenti",
      author: "Elly White",
      content: "Great Ocean Road in Australia. Pronto a partire per un’avventura indimenticabile?",
      category: "Australia"
    } 
    ];

    const initialFormData = {
        title: "",
        author: "",
        content: "",
        category: "",
    };

    const BlogForm = () => {
        const [posts, setPosts] = useState(blogPosts);
        const [formData, setFormData] = useState(initialFormData);

        function handleFormData(e) {
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

            setFormData((currentFormData) => ({
                ...currentFormData,
                [e.target.name]: value,
            }));
        }

        function handleSubmit(e) {
            e.preventDefault();
            setPosts((currentPosts) => [...currentPosts, {id: currentPosts[currentPosts.length - 1].id + 1, ...formData}]);
            setPosts((currentPosts) => [...currentPosts, {
                id:
                currentPosts.length === 0 ? 1 : currentPosts[currentPosts.length - 1].id + 1,
                ...formData
            }]);

            setFormData(initialFormData);
        }

        const removePost = i => {
            const updatedPosts = posts.filter((post,index) => {
              return index != i
            });
            setPosts(updatedPosts);
          }

        return (
            <>
            <h2>Dati del blog</h2>
            <form id="formpost" action="#" onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                onChange={handleFormData}
                value={formData.title}
                placeholder="Titolo blog"
                 />

                <input
                type="text"
                name="author"
                onChange={handleFormData}
                value={formData.author}
                placeholder="Autore del blog"
                 />

                <textarea
                name="content"
                onChange={handleFormData}
                value={formData.content}
                placeholder="Contenuto del blog"
                ></textarea>

                <input
                type="text"
                name="category"
                onChange={handleFormData}
                value={formData.category}
                placeholder="Categoria"
                 />
                 <button>AGGIUNGI POST</button>
            </form>





            {
                posts.map((post, I) => (
                    <div className="postItem" key={post.id}>
                        <h2>{post.title}</h2>
                        <h2>{post.author}</h2>
                        <h2>{post.content}</h2>
                        <h2>{post.category}</h2>
                        <button onClick={() => removePost(post.id)}>CANCELLA POST</button>
                    </div>

                ))
            }
            </>
        )



    }

    export default BlogForm