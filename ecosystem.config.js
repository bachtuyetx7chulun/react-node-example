module.exports = {
  apps: [
    {
      name: "backend",
      script: "./api/server.bundle.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        PORT: 3080,
      },
    },
  ],
};
