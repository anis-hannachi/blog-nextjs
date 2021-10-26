export default function Home({posts}) {
  return (
    <div>
      {posts && posts.map((post)=>(
        <div key={post.id}>
          <h2>{post.Title}</h2>
          <div>{post.User.username}</div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps(){
  //get posts from our api
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return{
    props: {posts},
  }
}
