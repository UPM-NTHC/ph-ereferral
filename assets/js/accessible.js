/*
 * "Accessible" checkbox in the menu bar (fragment-accessible.html).
 *
 * This script is loaded in the page <head>, so makeAccessible(state) is called with the saved
 * state before the body is rendered (no flash of the non-accessible presentation). It's called
 * again whenever the checkbox changes. The state is kept in browser local storage.
 *
 * makeAccessible() is filled out by the IG publisher: each template in the hierarchy can
 * register routines in its config.json ("accessibility-routines"), and the template manager
 * replaces the marker line below with a call to each of them, in template order (base first).
 * Each template must make sure the routines it registers are loaded before this script.
 * Note that the first call happens before the <body> exists.
 */

var ACCESSIBLE_STORAGE_KEY = "ig-accessible";

function makeAccessible(accessible) {
}

function loadAccessibleState() {
  try {
    return window.localStorage.getItem(ACCESSIBLE_STORAGE_KEY) === "true";
  } catch (e) {
    return false;
  }
}

function saveAccessibleState(accessible) {
  try {
    window.localStorage.setItem(ACCESSIBLE_STORAGE_KEY, accessible ? "true" : "false");
  } catch (e) {
    // storage unavailable (private mode, blocked site data) - the setting just won't persist
  }
}

function initAccessibleCheckbox() {
  var cb = document.getElementById("accessibleMode");
  if (cb) {
    cb.checked = loadAccessibleState();
    cb.addEventListener("change", function () {
      saveAccessibleState(cb.checked);
      makeAccessible(cb.checked);
    });
  }
}

makeAccessible(loadAccessibleState());

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAccessibleCheckbox);
} else {
  initAccessibleCheckbox();
}
