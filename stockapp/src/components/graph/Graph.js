import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { BarChart, XAxis } from "react-native-svg-charts";

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];

    return (
      <View style={styles.container}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
        />

        <XAxis
          style={{ marginHorizontal: -10, marginTop: 15 }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 25, right: 25 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "60%"
  }
});

export default Graph;

//888888888889988898989898989

// import React, { useState } from "react";
// // import { SafeAreaView, Text, Button, TextInput } from "react-native";
// import { LineChart, Grid } from "react-native-svg-charts";

// export default class Graph extends React.PureComponent {
//   render() {
//     const data = [
//       50,
//       10,
//       40,
//       95,
//       -4,
//       -24,
//       85,
//       91,
//       35,
//       53,
//       -53,
//       24,
//       50,
//       -20,
//       -80
//     ];

//     return (
//       <LineChart
//         style={{ height: 200 }}
//         data={data}
//         svg={{ stroke: "rgb(134, 65, 244)" }}
//         contentInset={{ top: 20, bottom: 20 }}
//       >
//         <Grid />
//       </LineChart>
//     );
//   }
// }

// // export default function Graph() {
// //   const [data] = useState([
// //     50,
// //     10,
// //     40,
// //     95,
// //     -4,
// //     -24,
// //     85,
// //     91,
// //     35,
// //     53,
// //     -53,
// //     24,
// //     50,
// //     -20,
// //     -80
// //   ]);
// // handleData(){

// // }

// //**************************************** */

// //   const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
// //   console.log("dfghj");

// //   return (
// //     <LineChart
// //       style={{ height: 200 }}
// //       data={data}
// //       svg={{ stroke: "rgb(134, 65, 25)" }}
// //       contentInset={{ top: 20, bottom: 20 }}
// //     >
// //       <Grid />
// //     </LineChart>
// //   );
// // }
// //******************************************************* */
// //
// // import * as ZingChart from "zingchart-react";

// // export default class Graph extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       config: {
// //         type: "bar",
// //         series: [
// //           {
// //             values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
// //           }
// //         ]
// //       }
// //     };
// //   }
// //   render() {
// //     return (
// //       <SafeAreaView>
// //         <ZingChart data={this.state.config} />
// //       </SafeAreaView>
// //     );
// //   }
// // }
