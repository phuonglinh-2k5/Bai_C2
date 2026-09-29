import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.gridContainer}>
        
        <View style={[styles.row, { flex: 1 }]}>
          <View style={[styles.box, { backgroundColor: '#1E88E5', flex: 1 }]}>
            <Text style={styles.text}>1</Text>
          </View>
        </View>

        
        <View style={[styles.row, { flex: 1 }]}>
          <View style={[styles.box, { backgroundColor: '#E53935', flex: 1 }]}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>

        
        <View style={[styles.row, { flex: 2.2 }]}>
          <View style={[styles.box, { backgroundColor: '#FBC02D', flex: 1 }]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#2E7D32', flex: 1 }]}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#7B1FA2', flex: 1 }]}>
            <Text style={styles.text}>5</Text>
          </View>
          
          <View style={{ flex: 1 }} />
        </View>

        
        <View style={[styles.row, { flex: 1.5 }]}>
          <View style={[styles.box, { backgroundColor: '#EF6C00', flex: 1 }]}>
            <Text style={styles.text}>6</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Phạm Phương Linh - BIT230239</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
  },
  gridContainer: {
    flex: 1, 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});