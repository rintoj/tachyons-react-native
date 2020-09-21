import * as React from 'react';
import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
export declare type Style = TextStyle | ViewStyle | ImageStyle;
export declare const styles: {
    theme: {
        [id: string]: any;
    };
    flex: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex0: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex1: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex2: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex3: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex4: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex5: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex6: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex7: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex8: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    flex9: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    noFlex: import("react-native").RegisteredStyle<{
        flex: number;
    }>;
    contain: import("react-native").RegisteredStyle<{
        resizeMode: "contain";
    }>;
    cover: import("react-native").RegisteredStyle<{
        resizeMode: "cover";
    }>;
    stretch: import("react-native").RegisteredStyle<{
        resizeMode: "stretch";
    }>;
    ba: import("react-native").RegisteredStyle<{
        borderStyle: "solid";
        borderWidth: number;
    }>;
    bt: import("react-native").RegisteredStyle<{
        borderTopWidth: number;
    }>;
    br: import("react-native").RegisteredStyle<{
        borderRightWidth: number;
    }>;
    bb: import("react-native").RegisteredStyle<{
        borderBottomWidth: number;
    }>;
    bl: import("react-native").RegisteredStyle<{
        borderLeftWidth: number;
    }>;
    bn: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bBlack: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bNearBlack: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bDarkGray: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bMidGray: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bGray: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bSilver: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightSilver: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bMoonGray: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightGray: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bNearWhite: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite90: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite80: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite70: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite60: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite50: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite40: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite30: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite20: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite10: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite05: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite025: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWhite0125: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack90: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack80: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack70: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack60: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack50: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack40: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack30: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack20: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack10: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack05: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack025: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlack0125: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bDarkRed: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bRed: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightRed: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bOrange: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bGold: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bYellow: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightYellow: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bPurple: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightPurple: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bDarkPink: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bHotPink: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bPink: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightPink: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bDarkGreen: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bGreen: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightGreen: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bNavy: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bDarkBlue: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bBlue: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightBlue: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bLightestBlue: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWashedBlue: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWashedGreen: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWashedYellow: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bWashedRed: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    bTransparent: import("react-native").RegisteredStyle<{
        borderColor: string;
    }>;
    br0: import("react-native").RegisteredStyle<{
        borderRightWidth: number;
    }>;
    br1: import("react-native").RegisteredStyle<{
        borderRadius: number;
    }>;
    br2: import("react-native").RegisteredStyle<{
        borderRadius: number;
    }>;
    br3: import("react-native").RegisteredStyle<{
        borderRadius: number;
    }>;
    br4: import("react-native").RegisteredStyle<{
        borderRadius: number;
    }>;
    brPill: import("react-native").RegisteredStyle<{
        borderRadius: number;
    }>;
    brBottom: import("react-native").RegisteredStyle<{
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    }>;
    brTop: import("react-native").RegisteredStyle<{
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    }>;
    brRight: import("react-native").RegisteredStyle<{
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    }>;
    brLeft: import("react-native").RegisteredStyle<{
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    }>;
    bDotted: import("react-native").RegisteredStyle<{
        borderStyle: "dotted";
    }>;
    bDashed: import("react-native").RegisteredStyle<{
        borderStyle: "dashed";
    }>;
    bSolid: import("react-native").RegisteredStyle<{
        borderStyle: "solid";
    }>;
    bw0: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bw1: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bw2: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bw3: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bw4: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bw5: import("react-native").RegisteredStyle<{
        borderWidth: number;
    }>;
    bt0: import("react-native").RegisteredStyle<{
        borderTopWidth: number;
    }>;
    bb0: import("react-native").RegisteredStyle<{
        borderBottomWidth: number;
    }>;
    bl0: import("react-native").RegisteredStyle<{
        borderLeftWidth: number;
    }>;
    top0: import("react-native").RegisteredStyle<{
        top: number;
    }>;
    right0: import("react-native").RegisteredStyle<{
        right: number;
    }>;
    bottom0: import("react-native").RegisteredStyle<{
        bottom: number;
    }>;
    left0: import("react-native").RegisteredStyle<{
        left: number;
    }>;
    top1: import("react-native").RegisteredStyle<{
        top: number;
    }>;
    right1: import("react-native").RegisteredStyle<{
        right: number;
    }>;
    bottom1: import("react-native").RegisteredStyle<{
        bottom: number;
    }>;
    left1: import("react-native").RegisteredStyle<{
        left: number;
    }>;
    top2: import("react-native").RegisteredStyle<{
        top: number;
    }>;
    right2: import("react-native").RegisteredStyle<{
        right: number;
    }>;
    bottom2: import("react-native").RegisteredStyle<{
        bottom: number;
    }>;
    left2: import("react-native").RegisteredStyle<{
        left: number;
    }>;
    absoluteFill: import("react-native").RegisteredStyle<{
        top: number;
        right: number;
        bottom: number;
        left: number;
    }>;
    dtFixed: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    flexAuto: import("react-native").RegisteredStyle<{
        minWidth: number;
    }>;
    flexColumn: import("react-native").RegisteredStyle<{
        flexDirection: "column";
    }>;
    flexRow: import("react-native").RegisteredStyle<{
        flexDirection: "row";
    }>;
    flexWrap: import("react-native").RegisteredStyle<{
        flexWrap: "wrap";
    }>;
    flexNowrap: import("react-native").RegisteredStyle<{
        flexWrap: "nowrap";
    }>;
    flexColumnReverse: import("react-native").RegisteredStyle<{
        flexDirection: "column-reverse";
    }>;
    flexRowReverse: import("react-native").RegisteredStyle<{
        flexDirection: "row-reverse";
    }>;
    itemsStart: import("react-native").RegisteredStyle<{
        alignItems: "flex-start";
    }>;
    itemsEnd: import("react-native").RegisteredStyle<{
        alignItems: "flex-end";
    }>;
    itemsCenter: import("react-native").RegisteredStyle<{
        alignItems: "center";
    }>;
    itemsBaseline: import("react-native").RegisteredStyle<{
        alignItems: "baseline";
    }>;
    itemsStretch: import("react-native").RegisteredStyle<{
        alignItems: "stretch";
    }>;
    selfStart: import("react-native").RegisteredStyle<{
        alignSelf: "flex-start";
    }>;
    selfEnd: import("react-native").RegisteredStyle<{
        alignSelf: "flex-end";
    }>;
    selfCenter: import("react-native").RegisteredStyle<{
        alignSelf: "center";
    }>;
    selfBaseline: import("react-native").RegisteredStyle<{
        alignSelf: "baseline";
    }>;
    selfStretch: import("react-native").RegisteredStyle<{
        alignSelf: "stretch";
    }>;
    justifyStart: import("react-native").RegisteredStyle<{
        justifyContent: "flex-start";
    }>;
    justifyEnd: import("react-native").RegisteredStyle<{
        justifyContent: "flex-end";
    }>;
    justifyCenter: import("react-native").RegisteredStyle<{
        justifyContent: "center";
    }>;
    justifyBetween: import("react-native").RegisteredStyle<{
        justifyContent: "space-between";
    }>;
    justifyAround: import("react-native").RegisteredStyle<{
        justifyContent: "space-around";
    }>;
    i: import("react-native").RegisteredStyle<{
        fontStyle: "italic";
    }>;
    fsNormal: import("react-native").RegisteredStyle<{
        fontStyle: "normal";
    }>;
    normal: import("react-native").RegisteredStyle<{
        fontWeight: "normal";
    }>;
    b: import("react-native").RegisteredStyle<{
        fontWeight: "bold";
    }>;
    fw1: import("react-native").RegisteredStyle<{
        fontWeight: "100";
    }>;
    fw2: import("react-native").RegisteredStyle<{
        fontWeight: "200";
    }>;
    fw3: import("react-native").RegisteredStyle<{
        fontWeight: "300";
    }>;
    fw4: import("react-native").RegisteredStyle<{
        fontWeight: "400";
    }>;
    fw5: import("react-native").RegisteredStyle<{
        fontWeight: "500";
    }>;
    fw6: import("react-native").RegisteredStyle<{
        fontWeight: "600";
    }>;
    fw7: import("react-native").RegisteredStyle<{
        fontWeight: "700";
    }>;
    fw8: import("react-native").RegisteredStyle<{
        fontWeight: "800";
    }>;
    fw9: import("react-native").RegisteredStyle<{
        fontWeight: "900";
    }>;
    h1: import("react-native").RegisteredStyle<{
        height: number;
    }>;
    h2: import("react-native").RegisteredStyle<{
        height: number;
    }>;
    h3: import("react-native").RegisteredStyle<{
        height: number;
    }>;
    h4: import("react-native").RegisteredStyle<{
        height: number;
    }>;
    h5: import("react-native").RegisteredStyle<{
        height: number;
    }>;
    h25: import("react-native").RegisteredStyle<{
        height: string;
    }>;
    h50: import("react-native").RegisteredStyle<{
        height: string;
    }>;
    h75: import("react-native").RegisteredStyle<{
        height: string;
    }>;
    h100: import("react-native").RegisteredStyle<{
        height: string;
    }>;
    minH100: import("react-native").RegisteredStyle<{
        minHeight: string;
    }>;
    hAuto: import("react-native").RegisteredStyle<{
        height: string;
    }>;
    tracked: import("react-native").RegisteredStyle<{
        letterSpacing: number;
    }>;
    trackedTight: import("react-native").RegisteredStyle<{
        letterSpacing: number;
    }>;
    trackedMega: import("react-native").RegisteredStyle<{
        letterSpacing: number;
    }>;
    lhSolid: import("react-native").RegisteredStyle<{
        lineHeight: number;
    }>;
    lhTitle: import("react-native").RegisteredStyle<{
        lineHeight: number;
    }>;
    lhCopy: import("react-native").RegisteredStyle<{
        lineHeight: number;
    }>;
    mw100: import("react-native").RegisteredStyle<{
        maxWidth: string;
    }>;
    mw1: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw2: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw3: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw4: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw5: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw6: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw7: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw8: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mw9: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    mwNone: import("react-native").RegisteredStyle<{
        maxWidth: string;
    }>;
    w1: import("react-native").RegisteredStyle<{
        width: number;
    }>;
    w2: import("react-native").RegisteredStyle<{
        width: number;
    }>;
    w3: import("react-native").RegisteredStyle<{
        width: number;
    }>;
    w4: import("react-native").RegisteredStyle<{
        width: number;
    }>;
    w5: import("react-native").RegisteredStyle<{
        width: number;
    }>;
    w10: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w20: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w25: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w30: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w33: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w34: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w40: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w50: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w60: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w70: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w75: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w80: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w90: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    w100: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    wAuto: import("react-native").RegisteredStyle<{
        width: string;
    }>;
    overflowVisible: import("react-native").RegisteredStyle<{
        overflow: "visible";
    }>;
    overflowHidden: import("react-native").RegisteredStyle<{
        overflow: "hidden";
    }>;
    relative: import("react-native").RegisteredStyle<{
        position: "relative";
    }>;
    absolute: import("react-native").RegisteredStyle<{
        position: "absolute";
    }>;
    o100: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o90: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o80: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o70: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o60: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o50: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o40: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o30: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o20: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o10: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o05: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o025: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    o0: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    black90: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black80: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black70: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black60: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black50: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black40: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black30: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black20: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black10: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black05: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white90: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white80: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white70: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white60: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white50: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white40: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white30: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white20: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white10: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    black: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    nearBlack: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    darkGray: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    midGray: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    gray: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    silver: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightSilver: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    moonGray: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightGray: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    nearWhite: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    white: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    darkRed: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    red: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightRed: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    orange: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    gold: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    yellow: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightYellow: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    purple: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightPurple: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    darkPink: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    hotPink: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    pink: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightPink: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    darkGreen: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    green: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightGreen: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    navy: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    darkBlue: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    blue: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightBlue: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    lightestBlue: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    washedBlue: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    washedGreen: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    washedYellow: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    washedRed: import("react-native").RegisteredStyle<{
        color: string;
    }>;
    bgBlack90: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack80: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack70: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack60: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack50: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack40: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack30: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack20: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack10: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack05: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite90: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite80: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite70: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite60: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite50: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite40: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite30: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite20: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite10: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlack: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgNearBlack: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgDarkGray: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgMidGray: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgGray: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgSilver: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightSilver: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgMoonGray: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightGray: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgNearWhite: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWhite: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgTransparent: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgDarkRed: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgRed: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightRed: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgOrange: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgGold: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgYellow: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightYellow: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgPurple: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightPurple: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgDarkPink: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgHotPink: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgPink: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightPink: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgDarkGreen: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgGreen: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightGreen: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgNavy: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgDarkBlue: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgBlue: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightBlue: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgLightestBlue: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWashedBlue: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWashedGreen: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWashedYellow: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    bgWashedRed: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    pa0: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa1: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa2: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa3: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa4: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa5: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa6: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pa7: import("react-native").RegisteredStyle<{
        padding: number;
    }>;
    pl0: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl1: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl2: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl3: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl4: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl5: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl6: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pl7: import("react-native").RegisteredStyle<{
        paddingLeft: number;
    }>;
    pr0: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr1: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr2: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr3: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr4: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr5: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr6: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pr7: import("react-native").RegisteredStyle<{
        paddingRight: number;
    }>;
    pb0: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb1: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb2: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb3: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb4: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb5: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb6: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pb7: import("react-native").RegisteredStyle<{
        paddingBottom: number;
    }>;
    pt0: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt1: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt2: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt3: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt4: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt5: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt6: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pt7: import("react-native").RegisteredStyle<{
        paddingTop: number;
    }>;
    pv0: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv1: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv2: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv3: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv4: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv5: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv6: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    pv7: import("react-native").RegisteredStyle<{
        paddingTop: number;
        paddingBottom: number;
    }>;
    ph0: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph1: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph2: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph3: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph4: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph5: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph6: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ph7: import("react-native").RegisteredStyle<{
        paddingLeft: number;
        paddingRight: number;
    }>;
    ma0: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma1: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma2: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma3: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma4: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma5: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma6: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ma7: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    ml0: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml1: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml2: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml3: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml4: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml5: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml6: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    ml7: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    mr0: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr1: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr2: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr3: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr4: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr5: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr6: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mr7: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    mb0: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb1: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb2: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb3: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb4: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb5: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb6: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mb7: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    mt0: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt1: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt2: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt3: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt4: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt5: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt6: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mt7: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    mv0: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv1: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv2: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv3: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv4: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv5: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv6: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mv7: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    mh0: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh1: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh2: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh3: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh4: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh5: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh6: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    mh7: import("react-native").RegisteredStyle<{
        marginLeft: number;
        marginRight: number;
    }>;
    na1: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na2: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na3: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na4: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na5: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na6: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    na7: import("react-native").RegisteredStyle<{
        margin: number;
    }>;
    nl1: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl2: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl3: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl4: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl5: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl6: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nl7: import("react-native").RegisteredStyle<{
        marginLeft: number;
    }>;
    nr1: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr2: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr3: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr4: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr5: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr6: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nr7: import("react-native").RegisteredStyle<{
        marginRight: number;
    }>;
    nb1: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb2: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb3: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb4: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb5: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb6: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nb7: import("react-native").RegisteredStyle<{
        marginBottom: number;
    }>;
    nt1: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt2: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt3: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt4: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt5: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt6: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    nt7: import("react-native").RegisteredStyle<{
        marginTop: number;
    }>;
    tl: import("react-native").RegisteredStyle<{
        textAlign: "left";
    }>;
    tr: import("react-native").RegisteredStyle<{
        textAlign: "right";
    }>;
    tc: import("react-native").RegisteredStyle<{
        textAlign: "center";
    }>;
    f1: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f2: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f3: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f4: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f5: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f6: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    f7: import("react-native").RegisteredStyle<{
        fontSize: number;
    }>;
    measure: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    measureWide: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    measureNarrow: import("react-native").RegisteredStyle<{
        maxWidth: number;
    }>;
    indent: import("react-native").RegisteredStyle<{
        marginTop: number;
        marginBottom: number;
    }>;
    truncate: import("react-native").RegisteredStyle<{
        overflow: "hidden";
    }>;
    center: import("react-native").RegisteredStyle<{
        marginRight: string;
        marginLeft: string;
    }>;
    mrAuto: import("react-native").RegisteredStyle<{
        marginRight: string;
    }>;
    mlAuto: import("react-native").RegisteredStyle<{
        marginLeft: string;
    }>;
    dim: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    dimActive: import("react-native").RegisteredStyle<{
        opacity: number;
    }>;
    z0: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z1: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z2: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z3: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z4: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z5: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z999: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    z9999: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
    zMax: import("react-native").RegisteredStyle<{
        zIndex: number;
    }>;
};
export declare function addTheme(themeName: string, colors: {
    [id: string]: string;
}): void;
export declare function currentTheme(): string;
export declare function setTheme(theme: string): void;
export declare function withTheme(TargetComponent: React.ComponentClass<any>): React.ComponentClass<any>;
