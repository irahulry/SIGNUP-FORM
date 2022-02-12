-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3367
-- Generation Time: Feb 12, 2022 at 04:11 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneno` varchar(15) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phoneno`, `password`) VALUES
(1, 'asd', 'ry80574@gmail.com', 'asd', 'asd'),
(2, 'Rahul Yadav', 'ryasdasdasd80574@gmail.com', 'ry805asdasd74@g', 'f67c2bcbfcfa30fccb36f72dca22a817'),
(3, 'Rahul Yadav', 'asdasdasdasdasd@asdasd', 'asdasdasd', 'a3dcb4d229de6fde0db5686dee47145d'),
(4, 'asd', 'ry80asd57sd4@gmail.com', 'ry80574sd@gmail', '0499afa3432e9f2ebd81c134c1f5e4b3'),
(5, 'asdasdas', 'asdasdasd@asdasd', 'asdasdasd', 'a3dcb4d229de6fde0db5686dee47145d'),
(6, 'asdasdas', 'asdasdasd@asdasd', 'asdasdasd', 'a3dcb4d229de6fde0db5686dee47145d'),
(7, 'asdasdas', 'asdasdasd@asdasd', 'asdasdasd', 'a3dcb4d229de6fde0db5686dee47145d'),
(8, 'asdasdas', 'asdasdasd@asdasd', 'asdasdasd', 'a3dcb4d229de6fde0db5686dee47145d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
