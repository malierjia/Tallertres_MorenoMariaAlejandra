-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 20-11-2014 a las 05:58:38
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `tallerlugares`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE IF NOT EXISTS `lugares` (
`id` int(11) NOT NULL,
  `tipo` text NOT NULL,
  `nombre` text NOT NULL,
  `lat` double NOT NULL,
  `long` double NOT NULL,
  `direccion` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `lugares`
--

INSERT INTO `lugares` (`id`, `tipo`, `nombre`, `lat`, `long`, `direccion`) VALUES
(1, 'bar', 'El faro', 3.397921782024203, -76.53960158491135, 'Calle 66 # 11-18'),
(2, 'comida', 'Il forno', 3.421809764340208, -76.54245877777102, 'Roosevelt # 39-2 a 39-100'),
(3, 'cine', 'Cinepolis', 3.394475907734571, -76.544165688715, 'Autosur # 68-1 a 68-99'),
(4, 'teatro', 'Los cristales', 3.444635336799733, -76.54674619136811, 'Carrera 15 # 7O-1 a 7O-99');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
