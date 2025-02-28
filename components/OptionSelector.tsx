import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const data = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default function OptionSelector() {

    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(new IndexPath(0));
  const renderOption = (title: string): React.ReactElement => (
    <SelectItem key={title} title={title} />
  );
  const displayValue = data[selectedIndex.row];

  return (
    <Layout
        style={styles.container}
        level='1'
    >
        <Select
            selectedIndex={selectedIndex}
            placeholder="default"
            style={{height: 10, width: 130}}
            value={displayValue}
            onSelect={index => setSelectedIndex(
                new IndexPath(Number(index) - 1)
            )}
        >
            {data.map(renderOption)}
        </Select>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "black"
  },
});