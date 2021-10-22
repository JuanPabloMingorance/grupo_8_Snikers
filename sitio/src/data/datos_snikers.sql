-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: snikers
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Dumping data for table `cart_shop`
--

LOCK TABLES `cart_shop` WRITE;
/*!40000 ALTER TABLE `cart_shop` DISABLE KEYS */;
INSERT INTO `cart_shop` VALUES (1,1,1,'5'),(2,2,6,'20'),(3,3,2,'50'),(4,3,1,'10'),(5,2,5,'30'),(6,1,5,'40');
/*!40000 ALTER TABLE `cart_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'running'),(2,'futbol'),(3,'classic');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'11.jpg',1),(2,'12.jpg',2),(3,'6.jpg',3),(4,'17.jpg',4),(5,'2.jpg',5),(6,'1.jpg',6);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Lite 2',7767.62,'Jordan','Disfrutá cada momento de tu día con estas zapatillas de running Reebok para hombre. Su diseño ultraliviano las hace ideales para usar a lo largo de todo el día. El exterior de malla abierta las hace transpirables. Las franjas laterales bordadas ofrecen estilo y soporte.',37,'oferta',1),(2,'Energen lite',28637.30,'Jordan','Dejá que estas zapatillas livianas de running Reebok para hombre te lleven más lejos, más rápido. El exterior transpirable mantiene tus pies frescos durante tu corrida. Los revestimientos en el talón aportan soporte y durabilidad. La mediasuela amortiguada FuelFoam y el talón biselado ofrecen confort durante todo el día.',62,'destacado',1),(3,'Botines Nike Superfly 7',27026.50,'Nike','Los botines Nike Superfly 7 Academy nacieron para que te conviertas en el mejor dentro de la cancha. Un diseño exclusivo, audaz y cómodo te permitirán sentir el control y la precisión que necesitas, además de contar con un calzado liviano para cambiar tu ritmo de juego cuando lo necesites.',32,'destacado',2),(4,'Botines Nike Legend 8',21641.90,'Nike','Los botines Nike Legend 8 Academy TF fueron pensados para jugadores elegantes y clásicos dentro del terreno de juego. Confeccionados en cuero para una mayor durabilidad, sentirás que partido a partido se amoldan a tus pies para una mejor performance. Cuenta con un texturizado que te ayuda a tener un mejor control de la pelota además de no dejar ceder demasiado al cuero. Hechos para terrenos artificiales o superficies sintéticas.',68,'oferta',2),(5,'Grand Court Base',25283.20,'Adiddas','Las zapatillas adidas Grand Court Base están inspiradas en aquellos partidos gloriosos de tenis de décadas pasadas como los años 70. Su diseño presenta un exterior de cuero texturizado con revestimientos de gamuza suave. Están compuestas con la plantilla Cloudfoam Comfort y forro interno textil para una sensación de amortiguación similar a pisar el verde césped de Wimbledon.',100,'destacado',3),(6,'Advantage',12633.30,'adiddas','Inspiradas en las canchas de polvo de ladrillo, nacieron las Zapatillas adidas Advantage K infantil. Son cómodas, urbanas y versátiles para mixear con todos los looks. De cuero sintético y suela de goma, lucen 3 rayas perforadas que revelan la influencia del tenis clásico. Cuentan con plantilla acolchada para sumar comodidad a cada pisada.',12,'oferta',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'administrador');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2021-10-22 20:41:04
