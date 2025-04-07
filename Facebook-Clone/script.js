// Simple Like functionality
const likeButtons = document.querySelectorAll(
  ".post-actions button:first-child"
);
likeButtons.forEach((button) => {
  let likes = 0;
  button.addEventListener("click", function () {
    likes++;
    this.textContent = `Like (${likes})`;
    this.classList.toggle("liked");
  });
});
// Select all comment buttons
document
  .querySelectorAll(".post-actions button:nth-child(2)")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const post = button.closest(".post");
      let commentSection = post.querySelector(".comment-section");

      // If comment section doesn't exist, create it
      if (!commentSection) {
        commentSection = document.createElement("div");
        commentSection.className = "comment-section";
        commentSection.style.display = "none";

        // Create input and button
        commentSection.innerHTML = `
        <div class="comment-input">
          <input type="text" placeholder="Write a comment..." />
          <button class="post-comment">Post</button>
        </div>
        <div class="comments-container"></div>
      `;

        post.appendChild(commentSection);

        // Add comment posting functionality
        const input = commentSection.querySelector("input");
        const postBtn = commentSection.querySelector(".post-comment");
        const container = commentSection.querySelector(".comments-container");

        postBtn.addEventListener("click", () => {
          const text = input.value.trim();
          if (text) {
            const comment = document.createElement("div");
            comment.className = "comment";
            comment.innerHTML = `
            <img src="assets/profile.jpg" alt="Profile">
            <div>
              <span class="comment-author">You</span>
              <p>${text}</p>
            </div>
          `;
            container.appendChild(comment);
            input.value = "";
          }
        });
      }

      // Toggle comment section
      commentSection.style.display =
        commentSection.style.display === "none" ? "block" : "none";
    });
  });
