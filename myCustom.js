// Select all buttons with the class 'ant-btn'
const allButtons = document.querySelectorAll(".ant-btn");

// Check if any buttons with the class 'ant-btn' are present
if (allButtons.length > 0) {
  // Helper function to replace button content with an image
  function replaceButtonContent(button, index, imageUrl) {
    // Create a new image element
    const newImageElement = document.createElement("img");
    newImageElement.src = imageUrl;
    newImageElement.alt = `New Image ${index + 1}`;

    // Set maximum width and height for the image
    newImageElement.style.maxWidth = "100%";
    newImageElement.style.maxHeight = "100%";

    // Replace the content of the button with the new image
    button.innerHTML = ""; // Remove existing content
    button.appendChild(newImageElement);
  }

  const images = [
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-47-chat.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-157-swipe.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-14-article.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-16-assessment.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-67-clock.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-23-calendar.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-19-book.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-46-notification-bell.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-45-category.gif",
    "https://womenfashionnova.com/wp-content/uploads/2023/12/system-regular-8-account.gif",
  ];

  // Replace content only if buttons are present
  for (let i = 0; i < Math.min(allButtons.length, images.length); i++) {
    console.log("script is running");
    replaceButtonContent(allButtons[i], i, images[i]);
  }
} else {
  console.warn("No buttons with the class 'ant-btn' found on the page.");
}
