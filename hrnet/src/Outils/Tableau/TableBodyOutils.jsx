import * as material from '@mui/material';
import React from 'react';

/**
 * Composant TableBodyOutils qui rend les lignes d'une table avec pagination.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.rows - Les données des lignes de la table. Chaque objet doit contenir les propriétés :
 *  - firstName : Le prénom de l'employé.
 *  - lastName : Le nom de famille de l'employé.
 *  - startDate : La date de début de l'emploi.
 *  - department : Le département de l'employé.
 *  - dateOfBirth : La date de naissance de l'employé.
 *  - street : L'adresse de rue de l'employé.
 *  - city : La ville de l'employé.
 *  - state : L'état de l'employé.
 *  - zipCode : Le code postal de l'employé.
 * @param {number} props.page - Le numéro de la page actuelle de la pagination.
 * @param {number} props.rowsPerPage - Le nombre de lignes à afficher par page.
 * @returns {JSX.Element} Le composant TableBodyOutils.
 */
export default function TableBodyOutils({ rows, page, rowsPerPage }) {
  return (
    <material.TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Paginer les lignes à afficher
        .map((row) => (
          <material.TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={row.firstName + row.lastName} // Utilise le prénom et le nom pour créer une clé unique
          >
            {/* Affiche chaque propriété de l'objet 'row' dans une cellule de table */}
            <material.TableCell>{row.firstName}</material.TableCell>
            <material.TableCell>{row.lastName}</material.TableCell>
            <material.TableCell>{row.startDate}</material.TableCell>
            <material.TableCell>{row.department}</material.TableCell>
            <material.TableCell>{row.dateOfBirth}</material.TableCell>
            <material.TableCell>{row.street}</material.TableCell>
            <material.TableCell>{row.city}</material.TableCell>
            <material.TableCell>{row.state}</material.TableCell>
            <material.TableCell>{row.zipCode}</material.TableCell>
          </material.TableRow>
        ))}
    </material.TableBody>
  );
}
