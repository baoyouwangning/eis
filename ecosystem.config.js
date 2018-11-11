/* eslint-disable */

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'eis_server',
      script: 'pageHTTPServer.js',
      // instances: 2,
      // exec_mode: "cluster",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      log_file: "logs/child-eis-http.log",
      error_file: "logs/child-eis-http-err.log",
      out_file: "logs/child-eis-http-out.log",
      pid_file: "run/child-eis-http.pid",
      env: {
        NODE_ENV: 'development',
        PORT: 8185
      },
      env_staging: {
        NODE_ENV: 'staging',
        PORT: 8185
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8185
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  //   dev : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/development',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
  //     env  : {
  //       NODE_ENV: 'dev'
  //     }
  //   }
  // }
};
