<script lang="ts">
  import { Calendar } from "@fullcalendar/core";
  import "@fullcalendar/interaction";
  import timeGrid from "@fullcalendar/timegrid";
  import { onMount } from "svelte";

  let calendar: HTMLElement;

  export let data;

  onMount(() => {
    let events: any[] = [];
    for (const member of data.member) {
      for (const jadwal of member.jadwal) {
        const a = jadwal.jam.slice(0, 5).split(":");
        const b = new Date();
        b.setHours(parseInt(a[0]) + 2);
        b.setMinutes(parseInt(a[1]));

        events.push({
          title: member.user.nama,
          daysOfWeek: [jadwal.hari],
          startTime: jadwal.jam,
          endTime: `${b.getHours()}:${b.getMinutes()}:00`,
        });
      }
    }

    let cal = new Calendar(calendar, {
      plugins: [timeGrid],
      allDaySlot: false,
      locale: ["id"],
      slotMinTime: "14:00",
      slotMaxTime: "22:00",
      events,
    });
    cal.render();
  });
</script>

<div
  class="m-2 p-2 rounded-lg bg-white overflow-y-auto"
  bind:this={calendar}
></div>
