import styles from "./index.module.css";

export const canvas = document.createElement("canvas");
canvas.className = styles.canvas;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const ctx = canvas.getContext("2d");
