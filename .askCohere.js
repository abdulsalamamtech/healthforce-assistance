


function askCohere(apiKey, question) {


    let prompt = `

    `;

    let question = `${question} make it short and simple`;
    $.ajax({
      url: "https://api.cohere.ai/generate/",
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        model: "command-xlarge-nightly",
        prompt: question,
        max_tokens: 1000,
      }),
      success: function (response) {
        console.log(response);
        // alert("Response from Cohere: " + response.text);
        // Replace special characters like ** with <strong>
        let formattedResponse =
          response.text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **text** to <strong>text</strong>
            // Convert "1 to 10" to a list item
            .replace(/1\./g, "<li>") 
            .replace(/2\./g, "</li><li>")
            .replace(/3\./g, "</li><li>")
            .replace(/3\./g, "</li><li>")
            .replace(/4\./g, "</li><li>")
            .replace(/5\./g, "</li><li>")
            .replace(/6\./g, "</li><li>")
            .replace(/7\./g, "</li><li>")
            .replace(/8\./g, "</li><li>")
            .replace(/9\./g, "</li><li>")
            .replace(/10\./g, "</li><li>") +
          "</li>";

        // Hide loader
        $("#loader").hide();
      
        $("#chatContainer").append(`
                      <div class="flex items-center mb-4">
                          <div class="bg-green-100 p-4 rounded-lg flex-grow">${formattedResponse}</div>
                          <button class="ml-2 p-2 bg-green-500 text-white rounded-full playBtn">▶</button>
                      </div>
                  `);

          // 800ms for the animation duration
          $('#chatContainer').stop().animate({
              scrollTop: $('#chatContainer')[0].scrollHeight
          }, 800); 
                  
      },
      error: function (xhr, status, error) {
          // Hide loader
          $("#loader").hide();
          alert("Please try again later, Error: " + error);
      },
      
    });

}