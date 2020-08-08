"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
// eslint-disable-next-line prettier/prettier
var react_native_1 = require("react-native");
exports.App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: styles.body },
            react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Step One"),
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription },
                    "Edit ",
                    react_1.default.createElement(react_native_1.Text, { style: styles.highlight }, "App.tsx"),
                    " to change this screen and then come back to see your edits.")),
            react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "See Your Changes"),
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription })),
            react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Debug"),
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription })),
            react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Learn More"),
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, "Read the docs to discover what to do next:")))));
};
var styles = react_native_1.StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: 'white'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    highlight: {
        fontWeight: '700'
    },
    footer: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right'
    }
});
