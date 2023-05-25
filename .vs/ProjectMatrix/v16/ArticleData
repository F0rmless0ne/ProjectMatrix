<!DOCTYPE html>
<html>
<head>
  <!-- Add Bootstrap CDN link here -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
  <div id="app">
    <!-- SingleArticle component -->
    <div class="row justify-content-center">
      <div class="col-md-6 mb-3 text-center">
        <h2>{data.title}</h2>
        <!-- Add more elements as needed to display additional data -->
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    // Define SingleArticle component
    Vue.component('SingleArticle', {
      props: ['data'],
      template: `
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3 text-center">
            <h2>{{ data.title }}</h2>
            <!-- Add more elements as needed to display additional data -->
          </div>
        </div>
      `
    });

    // Create Vue instance
    new Vue({
      el: '#app',
      data: {
        articleData: {
          title: 'Example Article Title',
          // Add more data properties as needed
        }
      }
    });
  </script>
</body>
</html>
