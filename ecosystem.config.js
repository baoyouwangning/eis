/**
 * @file ecosystem.config.js
 * Created by ningwang on 2018/9/19.
 */

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: 'mcn_open_fe',
            script: 'server/mainServer.js',
            // instances: 2,
            // exec_mode: 'cluster',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            log_file: 'logs/child-eis.log',
            error_file: 'logs/child-eis-err.log',
            out_file: 'logs/child-eis-out.log',
            pid_file: 'run/child-eis.pid',
            merge_logs: true,
            env: {
                NODE_ENV: 'development',
                PORT: 9090
            },
            env_staging: {
                NODE_ENV: 'staging',
                PORT: 9090
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 9090
            }
        },

        // Second application
        // {
        //   name      : 'WEB',
        //   script    : 'web.js'
        // }
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
