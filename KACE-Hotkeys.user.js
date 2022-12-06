// ==UserScript==
// @name    KACE Hotkeys
// @version 1.0
// @author  Matt Bayless
// @namespace   https://github.com/ACPS-ISS/KACE-Hotkeys
// @match       https://servicedesk.k12albemarle.org/*
// @updateurl   https://raw.githubusercontent.com/ACPS-ISS/KACE-Hotkeys/main/KACE-Hotkeys.user.js
// @downloadurl https://raw.githubusercontent.com/ACPS-ISS/KACE-Hotkeys/main/KACE-Hotkeys.user.js
// ==/UserScript==

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        e.stopImmediatePropagation();
//         alert("ctrl/cmd shift enter");
        document.querySelector('#k_btn_apply').click();
    }
    else {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          e.stopImmediatePropagation();
//           alert("ctrl/cmd enter");
          document.querySelector('#k_btn_save').click();
      }}
    if ((e.ctrlKey || e.metaKey) && e.key === 'Escape') {
      e.preventDefault();
      e.stopImmediatePropagation();
//       alert("ctrl/cmd Esc");
      document.querySelector('#k_btn_cancel').click();
    }
    if ((e.ctrlKey || e.metaKey) && e.code == 'KeyO') {
      e.preventDefault();
      e.stopImmediatePropagation();
//       alert("ctrl/cmd shift O");
      document.querySelector("#s2id_autogen10").focus();
    }
//     if ((e.ctrlKey || e.metaKey) && e.code == 'Digit1') {
//       e.preventDefault();
//       e.stopImmediatePropagation();
//       alert("test initiated");
//       if (document.querySelector("#select2-chosen-10").textContent == "ACPS Service Desk Pool") {
//         document.querySelector("#s2id_autogen10").focus();
//         alert("ticket needs assignment");
//       }
//     }
    return false;
}, false);