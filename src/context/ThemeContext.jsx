const theme = useMemo(() => createTheme({
  palette: {
    mode,
    ...(mode === 'light'
    ? {
    // Custom light theme colors
    primary: { main: '#1976d2' },
    background: { default: '#f4f4f4' },
    } : {
        // Custom dark theme
        primary: { main: '#bb86fc' },
        background: { default: '#121212' },
      }),
  },
}), [mode]);
