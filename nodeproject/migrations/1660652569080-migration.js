const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1660652569080 {
    name = 'migration1660652569080'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`address\` (\`addressid\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`studentId\` int NULL, UNIQUE INDEX \`REL_cc2d65ab99ebeef1fa3eeb7c5d\` (\`studentId\`), PRIMARY KEY (\`addressid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_cc2d65ab99ebeef1fa3eeb7c5db\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_cc2d65ab99ebeef1fa3eeb7c5db\``);
        await queryRunner.query(`DROP INDEX \`REL_cc2d65ab99ebeef1fa3eeb7c5d\` ON \`address\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }
}
