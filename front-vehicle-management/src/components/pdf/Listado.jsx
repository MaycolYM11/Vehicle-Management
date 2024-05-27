import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import { useGetPropietarios } from '../utils'; // Asegúrate de la ruta correcta
import Senior from '../../assets/senor.png';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 12,
        lineHeight: 1.6,
        flexDirection: 'column',
      },
  logo: {
    width: 80, // Ancho en unidades de punto (1/72 pulgadas)
    height: 80, // Alto en unidades de punto
  },
  titulo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  textoTitulo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  lineaHorizontal: {
    width: '98%',
    height: 1,
    backgroundColor: '#000', // Color de la línea
    marginVertical: 20, // Espaciado vertical
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '14%', // Adjust width to accommodate vehicles column
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    backgroundColor: '#f2f2f2',
  },
  tableColHeaderVehicle: {
    width: '28%', // Adjust width to accommodate vehicles column
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    backgroundColor: '#f2f2f2',
  },
  tableCol: {
    width: '14%', // Adjust width to accommodate vehicles column
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableColVehicle: {
    width: '28%', // Adjust width to accommodate vehicles column
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCellHeader: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  vehicleBullet: {
    marginLeft: 10,
    fontSize: 8,
  },
  body:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

function Listado() {
  const [propietarios] = useGetPropietarios();

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.titulo}>
          <View style={styles.logo}>
            <Image src={Senior} style={styles.logo} />
          </View>
          <View style={styles.textoTitulo}>
            <Text>Conjunto Residencial San Isidro</Text>
            <Text>NIT:XXXXXXXXX</Text>
            <Text>Crra 54a #54-12 - Bogota D.C -312-XXX-XXXX</Text>
          </View>
        </View>
        <View style={styles.lineaHorizontal} />
        <View style={styles.body}>
          <Text>Listado de propietarios</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Nombre</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Apellido</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Documento</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Teléfono</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Dirección</Text>
              </View>
              <View style={styles.tableColHeaderVehicle}>
                <Text style={styles.tableCellHeader}>Vehículos</Text>
              </View>
            </View>
            {propietarios.map((propietario) => (
              <View style={styles.tableRow} key={propietario._id.$oid}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{propietario.nombre}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{propietario.apellido}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{propietario.documento}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{propietario.telefono}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{propietario.direccion}</Text>
                </View>
                <View style={styles.tableColVehicle}>
                  {propietario.vehiculos.map((vehiculo, index) => (
                    <Text key={index} style={styles.vehicleBullet}>
                      • {vehiculo.modelo} ({vehiculo.año}) - {vehiculo.color}, Matrícula: {vehiculo.matricula}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Listado;
