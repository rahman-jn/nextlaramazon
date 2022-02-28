-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 28, 2022 at 01:57 PM
-- Server version: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.34-21+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laranext`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_02_27_150208_create_products_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isFeatured` tinyint(1) NOT NULL,
  `featuredImage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `brand` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double NOT NULL,
  `numReviews` mediumint(9) NOT NULL,
  `countInStock` mediumint(9) NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `cat_id`, `image`, `isFeatured`, `featuredImage`, `price`, `brand`, `rating`, `numReviews`, `countInStock`, `description`, `active`, `created_at`, `updated_at`) VALUES
(21, 'Kaden Homenick', 'eius-dolorum-tempora-et-omnis', 9, 'images/pants1.jpg', 0, '/tmp/e072a7c2e178981050b2bf7e3263ad42.png', 879.72, 'Adidas', 4.57, 0, 8, 'Recusandae et vitae deserunt reiciendis nisi quasi est. Ea sapiente aut autem ab voluptates eos. Beatae id laborum similique voluptatem. Sit explicabo amet sit repudiandae.', 1, '2022-02-27 13:44:42', '2022-02-27 13:44:42'),
(22, 'Dr. Percy Thompson', 'eaque-non-sunt-veritatis-rerum-accusantium-et', 1, 'images/pants2.jpg', 1, '/tmp/26e7c3ba0d722bd8c684652961bb49ba.png', 465.10, 'Nike', 3.36, 7, 0, 'Delectus dolorem mollitia voluptatem nisi. Est et ut sed assumenda libero delectus quia vero. Aut recusandae aliquam vitae quis hic.', 1, '2022-02-27 13:44:42', '2022-02-27 13:44:42'),
(23, 'Layne Douglas I', 'dolor-ipsum-ut-doloribus-perferendis-vero-alias-vero-ut', 5, 'images/pants3.jpg', 1, '/tmp/38a4bc32ef71e6e235c35db695553db9.png', 842.50, 'Adidas', 3.63, 7, 6, 'Aut ea pariatur amet et sit aut molestias impedit. Quam vel minus tenetur in consequatur nostrum. Rerum et soluta est esse numquam. Autem labore modi sed placeat praesentium est sint amet.', 1, '2022-02-27 13:44:42', '2022-02-27 13:44:42'),
(24, 'Maximillia Nader PhD', 'reiciendis-minima-et-voluptatibus-impedit-veniam-maiores-accusantium-nisi', 2, 'images/shirt1.jpg', 0, '/tmp/875d66066c67fa0f8e25e3808f31cd43.png', 414.57, 'Majid', 7.39, 9, 10, 'Delectus non eligendi reprehenderit quas ex doloribus. Sit qui velit enim id eius rem. Eius necessitatibus quos minima culpa. Velit quia molestias aut.', 1, '2022-02-27 13:44:42', '2022-02-27 13:44:42'),
(25, 'Willis Graham', 'laudantium-modi-dolorem-cumque-velit-sed-unde-amet', 6, 'images/shirt2.jpg', 1, '/tmp/08a289e98bf216624393878d5e312b5f.png', 183.07, 'Spolsh', 3.19, 4, 7, 'Et suscipit est consequatur dolorum laboriosam quas veritatis. Consectetur et laudantium nulla sint enim nulla modi. Saepe consequuntur consequatur magnam est.', 1, '2022-02-28 09:41:46', '2022-02-28 09:41:46'),
(26, 'Abdul Huels', 'aut-architecto-eveniet-est-ipsum-suscipit-deleniti', 4, 'images/shirt3.jpg', 0, '/tmp/1d392c6252e59371cf5171df8f98131a.png', 143.27, 'Spolsh', 9.54, 0, 9, 'Et dolorem ut vel sapiente vitae iusto. Voluptates enim soluta hic illum ea aut. Harum molestiae natus laboriosam quia qui. Nihil enim sapiente non qui rerum nihil explicabo quibusdam.', 1, '2022-02-28 09:41:46', '2022-02-28 09:41:46'),
(27, 'Prof. German DuBuque DDS', 'dolore-sed-reprehenderit-aspernatur-iure-in-accusantium-mollitia', 8, '/tmp/a2df1a3443fa8075b24821690f1b47d4.png', 0, '/tmp/16b9594392a4305a652b063a94ac7d49.png', 636.53, 'Majid', 6.18, 1, 9, 'Ducimus occaecati et voluptate in voluptas. Quia vitae temporibus sunt deleniti ducimus quam. Voluptas ullam blanditiis laborum nostrum cupiditate.', 0, '2022-02-28 09:41:46', '2022-02-28 09:41:46'),
(28, 'Dr. Elmira Fritsch DVM', 'et-porro-est-blanditiis-et', 3, '/tmp/ad9bcc6580385a51d7db8af89d71635b.png', 0, '/tmp/569a4db5e1fa3ce50d19494bf5469f13.png', 930.09, 'Majid', 0.89, 1, 3, 'Sunt nulla beatae eum aut est. Autem perferendis dolore quia ut. Omnis ut consectetur reprehenderit eius.', 0, '2022-02-28 09:41:46', '2022-02-28 09:41:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'JoJo.ir', 'rahman.j88@gmail.com', NULL, '$2y$10$U5vnVvZrUcWV23P28mSOCugycv6FiffYCSpQIME38VmVjsr9NWjL.', NULL, '2022-02-26 16:26:10', '2022-02-26 16:26:10'),
(2, 'jjjj', 'administrator@brackets.sk', NULL, '$2y$10$lcwrZHojR.HYuwmX.3LJbe8Vfrse3Jnju63wJcuLpreScs0cXZuUy', NULL, '2022-02-26 16:42:12', '2022-02-26 16:42:12'),
(3, 'otomobil.ir', 'rahmand.j88@gmail.com', NULL, '$2y$10$dwyRjHeorMjJgMPPclvxSeduBTRodGUnFRKDFJPDUwh9ADKzNW2Iq', NULL, '2022-02-27 08:16:24', '2022-02-27 08:16:24'),
(4, 'otomobidl.ir', 'rahmanj.j88@gmail.com', NULL, '$2y$10$Krap/LzdocFheX1Nbp24juuRBAk/tLkNtXEdUh120C9tlZ9kG28zm', NULL, '2022-02-27 08:19:44', '2022-02-27 08:19:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
