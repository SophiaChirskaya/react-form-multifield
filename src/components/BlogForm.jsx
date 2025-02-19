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

    const BlogForm = () => {
        const [posts, setPosts] = useState(blogPosts);

        return (
            <>
            <h2>Dati del blog</h2>
            {
                posts.map((post, I) => (
                    <div className="postItem" key={post.id}>
                        <h2>{post.title}</h2>
                        <h2>{post.author}</h2>
                        <h2>{post.content}</h2>
                        <h2>{post.category}</h2>
                    </div>

                ))
            }
            </>
        )



    }

    export default BlogForm