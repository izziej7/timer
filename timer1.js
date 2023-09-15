const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  const alarmNum = Number(alarm);
  if (alarmNum >= 0 && typeof alarmNum === "number") {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, alarmNum * 1000);
  }
}