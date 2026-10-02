-- MySQL dump 10.13  Distrib 26.7.0, for macos15 (arm64)
--
-- Host: localhost    Database: comic_site
-- ------------------------------------------------------
-- Server version	26.7.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '3019faaa-b6f3-11f1-916e-e54ac2ee6429:1-22';

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'Daisy Mae',7,'female',NULL,'2026-09-26 02:12:52'),(2,'Drakit',NULL,'female',NULL,'2026-09-26 02:15:08'),(3,'Beatrice',32,'female',NULL,'2026-09-26 02:18:01');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comic_characters`
--

LOCK TABLES `comic_characters` WRITE;
/*!40000 ALTER TABLE `comic_characters` DISABLE KEYS */;
INSERT INTO `comic_characters` VALUES (1,1),(2,1),(3,1),(2,2),(3,2),(1,3),(3,3);
/*!40000 ALTER TABLE `comic_characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comic_tags`
--

LOCK TABLES `comic_tags` WRITE;
/*!40000 ALTER TABLE `comic_tags` DISABLE KEYS */;
INSERT INTO `comic_tags` VALUES (1,1),(2,1),(3,1),(2,2),(3,2),(1,3),(3,3);
/*!40000 ALTER TABLE `comic_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comics`
--

LOCK TABLES `comics` WRITE;
/*!40000 ALTER TABLE `comics` DISABLE KEYS */;
INSERT INTO `comics` VALUES (1,'Welcome to the Family',NULL,1,'2026-09-26 02:28:48'),(2,'Meeting Drakit',NULL,2,'2026-09-26 02:29:45'),(3,'What is a Drakit Anyway?',NULL,3,'2026-09-26 02:31:06');
/*!40000 ALTER TABLE `comics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Kids Only','2026-09-26 02:44:27'),(2,'Imaginary Friends','2026-09-26 02:45:05'),(3,'Relatable Parents','2026-09-26 02:46:35');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-26 14:11:41
