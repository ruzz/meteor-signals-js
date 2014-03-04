Package.describe({
  summary: "Signals.js packaged for meteor"
});

Package.on_use(function (api, where) {
  api.add_files('signals.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('signals');

  api.add_files('signals_tests.js', ['client', 'server']);
});
