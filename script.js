document.addEventListener("DOMContentLoaded", function () {
  const codeElement = document.getElementById("code");
  const copyButton = document.getElementById("copy-button");
  const saveButton = document.getElementById("save-button");
  const lockButton = document.getElementById("lock-button");

  // Initial code content
  let codeContent = `function greet() {
    console.log("Hello, World!");
  }`;

  codeElement.textContent = codeContent;

  // Event listener for the Copy button
  copyButton.addEventListener("click", function () {
      // Copy code to clipboard
      const codeText = codeElement.textContent;
      navigator.clipboard.writeText(codeText).then(() => {
          // Show a copy success alert
          const alert = document.createElement("div");
          alert.textContent = "Code copied to clipboard.";
          alert.classList.add("alert", "show");
          document.body.appendChild(alert);
          setTimeout(() => {
              alert.classList.remove("show");
              document.body.removeChild(alert);
          }, 3000); // Remove the alert after 3 seconds
      });
  });

  // Event listener for the Save button
  saveButton.addEventListener("click", function () {
      // Replace this with actual save functionality (e.g., send code to a server)
      const savedCode = codeElement.textContent;
      // Show a save success alert
      const alert = document.createElement("div");
      alert.textContent = "Code saved: " + savedCode;
      alert.classList.add("alert", "show");
      document.body.appendChild(alert);
      setTimeout(() => {
          alert.classList.remove("show");
          document.body.removeChild(alert);
      }, 3000); // Remove the alert after 3 seconds
  });

  let isLocked = false;
  lockButton.addEventListener("click", function () {
      // Toggle the lock/unlock state and update the button text
      isLocked = !isLocked;
      codeElement.contentEditable = !isLocked;
      lockButton.innerText = isLocked ? "Unlock" : "Lock";
  });
});
