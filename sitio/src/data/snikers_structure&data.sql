-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: snikers
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Adidas'),(2,'Nike'),(3,'Diadora'),(4,'Fila');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_shop`
--

DROP TABLE IF EXISTS `cart_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_products_idx` (`user_id`),
  KEY `fk_products_users_idx` (`product_id`),
  CONSTRAINT `fk_products_users` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_users_products` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_shop`
--

LOCK TABLES `cart_shop` WRITE;
/*!40000 ALTER TABLE `cart_shop` DISABLE KEYS */;
INSERT INTO `cart_shop` VALUES (1,1,1,'5'),(2,2,6,'20'),(3,3,2,'50'),(4,3,1,'10'),(5,2,5,'30'),(6,1,5,'40');
/*!40000 ALTER TABLE `cart_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'running'),(2,'futbol'),(3,'classic');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(45) NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_product_idx` (`product_id`),
  CONSTRAINT `fk_images_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'11.jpg',1),(2,'12.jpg',2),(3,'6.jpg',3),(4,'17.jpg',4),(5,'2.jpg',5),(6,'1.jpg',6);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` int NOT NULL,
  `marca_id` int NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `stock` int NOT NULL,
  `seccion_id` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category_idx` (`categoria_id`),
  KEY `fk_products_brands_idx` (`marca_id`),
  KEY `fk_products_sections_idx` (`seccion_id`),
  CONSTRAINT `fk_products_brands` FOREIGN KEY (`marca_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`categoria_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_products_sections` FOREIGN KEY (`seccion_id`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Lite 2',7767,1,'Disfrutá cada momento de tu día con estas zapatillas de running Reebok para hombre. Su diseño ultraliviano las hace ideales para usar a lo largo de todo el día. El exterior de malla abierta las hace transpirables. Las franjas laterales bordadas ofrecen estilo y soporte.',37,1,1),(2,'Energen lite',28637,1,'Dejá que estas zapatillas livianas de running Reebok para hombre te lleven más lejos, más rápido. El exterior transpirable mantiene tus pies frescos durante tu corrida. Los revestimientos en el talón aportan soporte y durabilidad. La mediasuela amortiguada FuelFoam y el talón biselado ofrecen confort durante todo el día.',62,1,1),(3,'Botines Nike Superfly 7',27026,2,'Los botines Nike Superfly 7 Academy nacieron para que te conviertas en el mejor dentro de la cancha. Un diseño exclusivo, audaz y cómodo te permitirán sentir el control y la precisión que necesitas, además de contar con un calzado liviano para cambiar tu ritmo de juego cuando lo necesites.',32,1,2),(4,'Botines Nike Legend 8',21641,2,'Los botines Nike Legend 8 Academy TF fueron pensados para jugadores elegantes y clásicos dentro del terreno de juego. Confeccionados en cuero para una mayor durabilidad, sentirás que partido a partido se amoldan a tus pies para una mejor performance. Cuenta con un texturizado que te ayuda a tener un mejor control de la pelota además de no dejar ceder demasiado al cuero. Hechos para terrenos artificiales o superficies sintéticas.',68,2,2),(5,'Grand Court Base',25283,3,'Las zapatillas adidas Grand Court Base están inspiradas en aquellos partidos gloriosos de tenis de décadas pasadas como los años 70. Su diseño presenta un exterior de cuero texturizado con revestimientos de gamuza suave. Están compuestas con la plantilla Cloudfoam Comfort y forro interno textil para una sensación de amortiguación similar a pisar el verde césped de Wimbledon.',100,2,3),(6,'Advantage',12633,3,'Inspiradas en las canchas de polvo de ladrillo, nacieron las Zapatillas adidas Advantage K infantil. Son cómodas, urbanas y versátiles para mixear con todos los looks. De cuero sintético y suela de goma, lucen 3 rayas perforadas que revelan la influencia del tenis clásico. Cuentan con plantilla acolchada para sumar comodidad a cada pisada.',12,2,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'administrador');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'oferta'),(2,'destacado');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_rol_idx` (`rol_id`),
  CONSTRAINT `fk_users_rol` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'brian','lopez','brian@gmail.com','$2a$10$qVoLnPMW4rXs5MPggD4COO7EJha8vn66XEc.0ndNaJC8TEYVKq4Ie',1),(2,'juan','Mingorance','juan@gmail.com','$2a$10$Zt/6VjnITHtjGuBXAJzBXeL3Ojlsdc1VPnYrQjuk6E5XJYZGFpP4W',1),(3,'ludmila','Morelli','ludmila@gmail.com','$2a$10$diiBzfMI1nBwXjLUU7rRbOWPWWYke4mBQLrM5pPc3d/AZuNhUNEKi',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-19 11:58:36
