<script>
    export let author;
</script>


  
  <div class="author-bio">
    <img src={author.entry[0].thumbnailUrl} alt={author.entry[0].displayName}>
    <p>
      Hi, I'm <strong>{author.entry[0].displayName}</strong>. <br />
      {author.entry[0].aboutMe}
      You can follow me on <a href="https://www.twitter.com/const_shiv" target="_blank">Twitter</a>,
      see some of my work on <a href="https://www.github.com/1983shiv" target="_blank">GitHub</a>.
    </p>
  </div>
  

  <style>
    .author-bio {
      margin-top: 30px;
      align-items: center;
      display: flex;
      background-color: #f4f4f4;
      padding: 12px;
      border-radius: 10px;
      text-align: justify;

    }
    .author-bio p{
      font-size: 12px;
    }
  
    img {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      /* border: 3px solid #fd6378; */
      display: block;
      margin-right: 20px;
    }
  
    p {
      font-size: 1.125rem;
    }
  </style>