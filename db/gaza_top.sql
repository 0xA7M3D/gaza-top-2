-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2026 at 11:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gaza_top`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `my_id` int(11) NOT NULL,
  `msg` varchar(500) NOT NULL,
  `band` varchar(10) NOT NULL,
  `created_in` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_token` varchar(500) NOT NULL,
  `text` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `likes_count` int(11) NOT NULL,
  `share_count` int(11) NOT NULL,
  `comments_count` int(11) NOT NULL,
  `created_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_token`, `text`, `image`, `likes_count`, `share_count`, `comments_count`, `created_at`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM', 'بسم الله', '1779639641872-capture_260418_090300.png', 0, 0, 0, '5/24/2026'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM', 'الحمدلله', '1779639758097-240_F_331808361_UD4Yj2AgguwGmPzA3DJia2nKMx4oH60c.jpg', 0, 0, 0, '5/24/2026'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM', 'Allahu Akbar', '1779641222193-doerertertwnload.png', 0, 0, 0, '5/24/2026'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM', 'qwew', '1779641613278-doerertertwnload.png', 0, 0, 0, '5/24/2026');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `my_id` int(11) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `auth` varchar(500) NOT NULL,
  `image` varchar(300) NOT NULL,
  `name` varchar(50) NOT NULL,
  `bio` varchar(100) NOT NULL,
  `user` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `folowers` int(11) NOT NULL,
  `folowing` int(11) NOT NULL,
  `active` varchar(50) NOT NULL,
  `ban` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `auth`, `image`, `name`, `bio`, `user`, `pass`, `folowers`, `folowing`, `active`, `ban`) VALUES
(88, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM', '9.png', 'Ahmed Elhady', 'Hello World i\'m new here (:', 'ahmed', '$2b$10$Je8.H38MMum8jc2ymKhSNe6O9Y8C7WWgg3xsNGeCyATtRPFhBy7Xu', 0, 0, '0', '0'),
(89, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibXVoYW1tZWQiLCJpYXQiOjE3Nzk2MzE5ODIsImV4cCI6MTc4MDIzNjc4Mn0.KqMSb9yt5VOJ5jAcXl4z-3AtM8sTjzF38vYEf4EUSgk', '3.png', 'Muhammed', 'Hello World i\'m new here (:', 'muhammed', '$2b$10$BhGGLLsANllhW4Iwtu.7H.ILhV3jOMHEMZnqgjkZrazzDNbp5fsES', 0, 0, '0', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
