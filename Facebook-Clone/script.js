document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");
  const commentToggles = document.querySelectorAll(".comment-toggle");

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const countSpan = btn.querySelector(".like-count");
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
    });
  });

  commentToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const post = btn.closest(".post");
      const commentSection = post.querySelector(".comment-section");
      commentSection.style.display =
        commentSection.style.display === "none" ? "block" : "none";

      const input = commentSection.querySelector(".comment-input");
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
          const comment = document.createElement("p");
          comment.textContent = input.value;
          commentSection.querySelector(".comments").appendChild(comment);
          input.value = "";
        }
      });
    });
  });

  const storyImages = document.querySelectorAll(".story-avatar img");
  const modal = document.getElementById("story-modal");
  const modalImg = document.getElementById("story-view-img");
  const closeBtn = document.querySelector(".close-btn");

  storyImages.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
