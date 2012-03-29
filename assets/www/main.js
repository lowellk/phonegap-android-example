var onPause = function() {
  console.log('Pause');
};

var onResume = function() {
  console.log('Resume');
};

var onBatteryStatus = function(e) {
  console.log("Level: " + e.level);
};

var onBatteryLow = function(e) {
  console.log("Level: " + e.level);
};

var onBatteryCritical = function(e) {
  console.log("Level: " + e.level);
};

var onDeviceReady = function() {
  document.addEventListener('pause', onPause, false);
  document.addEventListener('resume', onResume, false);

  // http://docs.phonegap.com/en/1.5.0/phonegap_events_events.md.html#batterystatus
  window.addEventListener('batterystatus', onBatteryStatus, false);
  window.addEventListener('batterylow', onBatteryLow, false);
  window.addEventListener('batterycritical', onBatteryCritical, false);
};

$(function() {
  console.log('Init');
  document.addEventListener('deviceready', onDeviceReady, false);
});