import * as material from '@mui/material';
import React from 'react';

/**
 * Composant TableHeadOutils qui rend l'en-tête d'une table avec des fonctionnalités de tri.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.order - L'ordre actuel de tri, soit 'asc' pour ascendant ou 'desc' pour descendant.
 * @param {string} props.orderBy - Le nom de la colonne actuellement triée.
 * @param {function} props.onRequestSort - Fonction de rappel pour gérer la demande de tri.
 * @returns {JSX.Element} Le composant TableHeadOutils.
 */
export default function TableHeadOutils({ order, orderBy, onRequestSort }) {
  // Définition des colonnes de la table
  const columns = [
    'firstName', 'lastName', 'startDate', 'department',
    'dateOfBirth', 'city', 'street', 'state', 'zipCode'
  ];

  /**
   * Crée un gestionnaire de tri pour la colonne spécifiée.
   *
   * @param {string} property - Le nom de la colonne pour laquelle le tri est demandé.
   * @returns {function} Une fonction qui gère l'événement de clic pour le tri de la colonne.
   */
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <material.TableHead>
      <material.TableRow>
        {columns.map((col) => (
          <material.TableCell key={col}>
            {/* Ajout d'une étiquette de tri pour chaque colonne */}
            <material.TableSortLabel
              active={orderBy === col} // Active si la colonne est celle actuellement triée
              direction={orderBy === col ? order : 'asc'} // Direction de tri actuelle
              onClick={createSortHandler(col)} // Gestionnaire de clic pour trier par colonne
            >
              {/* Formatte le nom de la colonne pour qu'il soit plus lisible (ex: "firstName" -> "First Name") */}
              {col.charAt(0).toUpperCase() + col.slice(1).replace(/([A-Z])/g, ' $1')}
            </material.TableSortLabel>
          </material.TableCell>
        ))}
      </material.TableRow>
    </material.TableHead>
  );
}
