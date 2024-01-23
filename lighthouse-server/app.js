import { startServer } from '@spotify/lighthouse-audit-service';

startServer({
  port: 4008,
  cors: true,
  postgresConfig: {
    db: 'postgres',
    database: 'lighthouse_audit_service',
    user: 'dbuser',
    password: 'example',
    port: 5432,
  },
});