CREATE TABLE `jadwal` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hari` int NOT NULL,
	`jam` time NOT NULL,
	CONSTRAINT `jadwal_id` PRIMARY KEY(`id`)
);

CREATE TABLE `manfaat` (
	`id` int AUTO_INCREMENT NOT NULL,
	`id_paket` int NOT NULL,
	`nama` varchar(255) NOT NULL,
	CONSTRAINT `manfaat_id` PRIMARY KEY(`id`)
);

CREATE TABLE `paket` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nama` varchar(255) NOT NULL,
	`harga` int NOT NULL,
	`durasi` int NOT NULL,
	`privat` boolean NOT NULL,
	CONSTRAINT `paket_id` PRIMARY KEY(`id`)
);

CREATE TABLE `user` (
	`email` varchar(255) NOT NULL,
	`nama` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`foto` varchar(255),
	`gender` enum('P','L'),
	`tipe` enum('admin','coach','member','owner') NOT NULL,
	`alamat` text,
	`no_hp` varchar(15),
	`id_paket` int,
	`email_coach` int,
	CONSTRAINT `user_email` PRIMARY KEY(`email`)
);

ALTER TABLE `manfaat` ADD CONSTRAINT `manfaat_id_paket_paket_id_fk` FOREIGN KEY (`id_paket`) REFERENCES `paket`(`id`) ON DELETE no action ON UPDATE no action;
ALTER TABLE `user` ADD CONSTRAINT `user_id_paket_paket_id_fk` FOREIGN KEY (`id_paket`) REFERENCES `paket`(`id`) ON DELETE no action ON UPDATE no action;
ALTER TABLE `user` ADD CONSTRAINT `user_email_coach_user_email_fk` FOREIGN KEY (`email_coach`) REFERENCES `user`(`email`) ON DELETE no action ON UPDATE no action;