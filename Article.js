<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS styles for the header */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
      padding: 10px;
      display: flex;
      align-items: center;
    }

    h1 {
      margin: 0;
      font-size: 24px;
      color: #333;
      cursor: pointer;
    }

    h1:hover {
      text-decoration: underline;
    }

    /* CSS styles for the articles list */
    .articles-container {
      margin-top: 80px; /* Adjust as needed to create space below the header */
    }

    .article {
      margin-bottom: 20px;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
    }

    .article h2 {
      margin-top: 0;
    }

    .article p {
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  <header>
    <h1 onclick="location.href='/articles'">SuperRezGod</h1>
  </header>

  <div class="articles-container">
    <!-- Mock data for articles -->
    <div class="article">
      <h2>Article Title 1</h2>
      <p>Welcome to the coding html button mashing fiesta.</p>
    </div>

    <div class="article">
      <h2>Article Title 2</h2>
      <p>Here begins the adventure down the rabbit hole welcome Neo.</p>
    </div>

    <div class="article">
      <h2>Article Title 3</h2>
      <p>Lets see how deep we go into the Matrix.</p>
    </div>

    <!-- Add more articles as needed -->

    <!-- Mock data for articles -->
<div class="article">
  <h2>Article Title 1</h2>
  <p>You are still here I see, ready to learn the truth?.</p>
  <a href="/article/1">Read More</a> <!-- Update the link to include the article ID -->
</div>

<div class="article">
  <h2>Article Title 2</h2>
  <p>Then lets begin with what you think you know.</p>
  <a href="/article/2">Read More</a> <!-- Update the link to include the article ID -->
</div>

<div class="article">
  <h2>Article Title 3</h2>
  <p>You know kung fu? Good!...Show me..</p>
  <a href="/article/3">Read More</a> <!-- Update the link to include the article ID -->
</div>
  </div>

</body>
</html>