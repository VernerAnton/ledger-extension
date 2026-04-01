// LEDGER PHASE 0: Diagnostics & DOM Check
(function () {
  'use strict';

  console.log("🟢 [Ledger] Phase 0 Test Extension Loaded Successfully!");

  // Wait 3 seconds for TypingMind's React to finish drawing the screen
  setTimeout(() => {
    console.log("🟢 [Ledger] Running Diagnostics...");

    // 1. Check the Chat Input Box
    const chatInput = document.querySelector('[data-element-id="chat-input-textbox"]');
    if (chatInput) {
      console.log("✅ Chat Input found! We can inject prompts.");
    } else {
      console.error("❌ Chat Input NOT found! TypingMind may have changed this ID.");
    }

    // 2. Check the Send Button
    const sendButton = document.querySelector('[data-element-id="send-button"]');
    if (sendButton) {
      console.log("✅ Send Button found! We can click it programmatically.");
    } else {
      console.error("❌ Send Button NOT found!");
    }

    // 3. Check the Sidebar
    const workspaceBar = document.querySelector('[data-element-id="workspace-bar"]');
    if (workspaceBar) {
      console.log("✅ Sidebar found! We can inject our Ledger button later.");
    } else {
      console.error("❌ Sidebar NOT found!");
    }

  }, 3000);
})();