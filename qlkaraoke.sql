-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2022 at 01:12 PM
-- Server version: 5.7.25
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlkaraoke`
--

-- --------------------------------------------------------

--
-- Table structure for table `ctdp`
--

CREATE TABLE `ctdp` (
  `maPhong` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `maDat` int(11) NOT NULL,
  `tGDen` time NOT NULL,
  `tGDi` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ctdp`
--

INSERT INTO `ctdp` (`maPhong`, `maDat`, `tGDen`, `tGDi`) VALUES
('R01', 1, '23:25:00', '12:25:00');

-- --------------------------------------------------------

--
-- Table structure for table `datphong`
--

CREATE TABLE `datphong` (
  `maDat` int(11) NOT NULL,
  `tenKH` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `soDT` int(11) NOT NULL,
  `ngayDat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `datphong`
--

INSERT INTO `datphong` (`maDat`, `tenKH`, `soDT`, `ngayDat`) VALUES
(1, 'Đặng Công Nhật', 911313901, '2022-06-03');

-- --------------------------------------------------------

--
-- Table structure for table `loaiphong`
--

CREATE TABLE `loaiphong` (
  `maLP` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tenLP` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `mieuTa` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE `phong` (
  `maPhong` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tenPhong` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `giaTien` int(11) NOT NULL,
  `loaiPhong` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tinhTrang` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `khongGian` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `phong`
--

INSERT INTO `phong` (`maPhong`, `tenPhong`, `giaTien`, `loaiPhong`, `tinhTrang`, `khongGian`) VALUES
('R01', 'Room 1', 5, 'Normal', 'Available', '8'),
('RV01', 'Room VIP 01', 10, 'VIP', 'Available', '20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ctdp`
--
ALTER TABLE `ctdp`
  ADD PRIMARY KEY (`maPhong`,`maDat`),
  ADD UNIQUE KEY `maDat` (`maDat`);

--
-- Indexes for table `datphong`
--
ALTER TABLE `datphong`
  ADD PRIMARY KEY (`maDat`);

--
-- Indexes for table `loaiphong`
--
ALTER TABLE `loaiphong`
  ADD PRIMARY KEY (`maLP`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`maPhong`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ctdp`
--
ALTER TABLE `ctdp`
  MODIFY `maDat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `datphong`
--
ALTER TABLE `datphong`
  MODIFY `maDat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
