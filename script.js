const ROUTES = {
      jogjaSolo: {
        label: "Yogyakarta → Solo",
        stations: [
          ["Yogyakarta (Tugu)", ["05:05", "06:00", "07:05", "07:54", "08:49", "10:56", "12:07", "13:57", "15:01", "16:10", "17:35", "18:08", "20:15", "21:20", "22:35"]],
          ["Lempuyangan", ["05:10", "06:06", "07:10", "07:59", "08:54", "11:01", "12:12", "14:02", "15:06", "16:15", "17:40", "18:13", "20:20", "21:25", "22:40"]],
          ["Maguwo", ["05:17", "06:13", "07:17", "08:06", "09:01", "11:08", "12:19", "14:10", "15:13", "16:22", "17:47", "18:20", "20:27", "21:32", "22:47"]],
          ["Brambanan", ["05:26", "06:21", "07:25", "08:14", "09:09", "11:16", "12:27", "14:19", "15:22", "16:30", "17:55", "18:28", "20:36", "21:40", "22:56"]],
          ["Srowot", ["05:33", "06:28", "07:32", "08:21", "09:16", "11:23", "12:34", "14:26", "15:29", "16:37", "18:01", "18:35", "20:43", "21:47", "23:03"]],
          ["Klaten", ["05:40", "06:35", "07:39", "08:28", "09:23", "11:30", "12:41", "14:33", "15:36", "16:44", "18:08", "18:42", "20:50", "21:54", "23:10"]],
          ["Ceper", ["05:49", "06:44", "07:48", "08:37", "09:32", "11:39", "12:50", "14:42", "15:45", "16:53", "18:17", "18:51", "20:59", "22:03", "23:19"]],
          ["Delanggu", ["05:56", "06:51", "07:55", "08:44", "09:39", "11:46", "12:57", "14:49", "15:52", "17:12", "18:24", "18:58", "21:06", "22:10", "23:26"]],
          ["Gawok", ["06:03", "06:57", "08:01", "08:51", "09:45", "11:52", "13:03", "14:56", "15:58", "17:18", "18:30", "19:04", "21:12", "22:17", "23:33"]],
          ["Purwosari", ["06:11", "07:04", "08:09", "08:59", "09:52", "12:00", "13:10", "15:03", "16:06", "17:26", "18:38", "19:11", "21:19", "22:26", "23:41"]],
          ["Solo Balapan", ["06:16", "07:10", "08:16", "09:06", "10:00", "12:06", "13:17", "15:09", "16:13", "17:35", "18:45", "19:17", "21:28", "22:32", "23:47"]],
          ["Solo Jebres", ["06:21", "07:15", "08:23", "09:12", "10:06", "12:12", "13:24", "15:15", "16:19", "17:40", "18:51", "19:23", "21:34", "22:37", "23:54"]],
          ["Palur", ["06:26", "07:20", "08:29", "09:18", "10:12", "12:18", "13:30", "15:21", "16:25", "17:45", "18:57", "19:28", "21:40", "22:43", "24:00"]]
        ]
      },
      soloJogja: {
        label: "Solo → Yogyakarta",
        stations: [
          ["Palur", ["05:00", "06:05", "07:15", "08:56", "10:40", "12:50", "13:43", "15:35", "16:35", "18:05", "19:45", "20:42"]],
          ["Solo Jebres", ["05:06", "06:11", "07:21", "09:02", "10:46", "12:56", "13:49", "15:41", "16:41", "18:11", "19:51", "20:48"]],
          ["Solo Balapan", ["05:13", "06:18", "07:27", "09:08", "10:52", "13:03", "13:55", "15:48", "16:47", "18:19", "20:01", "20:54"]],
          ["Purwosari", ["05:18", "06:23", "07:32", "09:13", "10:57", "13:08", "14:00", "15:53", "16:52", "18:24", "20:06", "20:59"]],
          ["Gawok", ["05:26", "06:31", "07:40", "09:20", "11:04", "13:16", "14:07", "16:01", "16:59", "18:31", "20:14", "21:06"]],
          ["Delanggu", ["05:32", "06:37", "07:46", "09:26", "11:10", "13:22", "14:13", "16:07", "17:05", "18:37", "20:20", "21:12"]],
          ["Ceper", ["05:39", "06:44", "07:53", "09:46", "11:17", "13:29", "14:20", "16:14", "17:12", "18:44", "20:27", "21:19"]],
          ["Klaten", ["05:48", "06:53", "08:02", "09:55", "11:26", "13:38", "14:29", "16:23", "17:21", "18:53", "20:36", "21:28"]],
          ["Srowot", ["05:55", "07:00", "08:09", "10:02", "11:33", "13:45", "14:36", "16:30", "17:28", "19:00", "20:43", "21:35"]],
          ["Brambanan", ["06:01", "07:06", "08:15", "10:08", "11:39", "13:52", "14:42", "16:36", "17:34", "19:06", "20:49", "21:41"]],
          ["Maguwo", ["06:10", "07:15", "08:24", "10:16", "11:47", "14:00", "14:50", "16:44", "17:42", "19:14", "20:57", "21:49"]],
          ["Lempuyangan", ["06:19", "07:25", "08:35", "10:23", "11:55", "14:08", "15:01", "16:52", "17:49", "19:21", "21:05", "21:57"]],
          ["Yogyakarta (Tugu)", ["06:23", "07:29", "08:39", "10:27", "11:59", "14:12", "15:06", "16:56", "17:55", "19:25", "21:09", "22:01"]]
        ]
      }
    };

    let dir = "jogjaSolo";
    const originSel = document.getElementById('origin');
    const destSel = document.getElementById('dest');

    function toMin(t) { let [h, m] = t.split(':').map(Number); return h * 60 + m; }
    function fmtDur(mins) {
      if (mins <= 0) mins += 1440;
      const h = Math.floor(mins / 60), m = mins % 60;
      return h > 0 ? `${h} jam ${m > 0 ? m + ' mnt' : ''}`.trim() : `${m} mnt`;
    }
    function display(t) { return t === "24:00" ? "00.00" : t.replace(':', '.'); }

    function populateSelects() {
      const stations = ROUTES[dir].stations;
      originSel.innerHTML = stations.map((s, i) => `<option value="${i}">${s[0]}</option>`).join('');
      originSel.value = 0;
      fillDest();
    }
    function fillDest() {
      const stations = ROUTES[dir].stations;
      const oi = parseInt(originSel.value);
      const opts = stations.map((s, i) => i).filter(i => i > oi);
      destSel.innerHTML = opts.map(i => `<option value="${i}">${stations[i][0]}</option>`).join('');
      destSel.value = opts.length ? opts[opts.length - 1] : oi + 1;
    }

    function nowMinutesWIB() {
      const d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }

    function render() {
      const stations = ROUTES[dir].stations;
      const oi = parseInt(originSel.value), di = parseInt(destSel.value);
      if (isNaN(di) || di <= oi) { fillDest(); }
      const oIdx = parseInt(originSel.value), dIdx = parseInt(destSel.value);
      const originName = stations[oIdx][0], destName = stations[dIdx][0];
      const depTimes = stations[oIdx][1], arrTimes = stations[dIdx][1];
      const nowMin = nowMinutesWIB();

      const trains = depTimes.map((dep, i) => {
        const arr = arrTimes[i];
        let durMin = toMin(arr === "24:00" ? "24:00" : arr) - toMin(dep);
        if (arr === "24:00") durMin = 1440 - toMin(dep);
        else if (durMin < 0) durMin += 1440;
        return { dep, arr, durMin, depMin: toMin(dep) };
      });

      let nextIdx = trains.findIndex(t => t.depMin >= nowMin);
      const listEl = document.getElementById('trainList');
      const nextEl = document.getElementById('next-card');

      if (trains.length === 0) {
        listEl.innerHTML = `<div class="empty">Tidak ada jadwal untuk rute ini.</div>`;
        nextEl.innerHTML = '';
        return;
      }

      if (nextIdx === -1) {
        nextEl.innerHTML = `
      <div class="eyebrow">Kereta berikutnya</div>
      <div class="empty" style="padding:6px 0;">Sudah tidak ada keberangkatan lagi hari ini dari ${originName}.<br>Kereta pertama besok pukul ${display(trains[0].dep)}.</div>`;
      } else {
        const t = trains[nextIdx];
        nextEl.innerHTML = `
      <div class="eyebrow">Kereta berikutnya · ${originName} → ${destName}</div>
      <div class="row">
        <div>
          <div class="dep-time">${display(t.dep)}</div>
          <div class="meta">berangkat dari ${originName}</div>
        </div>
        <div style="text-align:right">
          <div class="arr">tiba ${display(t.arr)}</div>
          <div class="meta">lama perjalanan ${fmtDur(t.durMin)}</div>
        </div>
      </div>
      <span class="badge${t.depMin - nowMin <= 15 ? ' urgent' : ''}">${t.depMin - nowMin <= 15 ? 'Berangkat sebentar lagi' : 'Terjadwal'}</span>`;
      }

      listEl.innerHTML = trains.map((t, i) => {
        const cls = i < nextIdx ? 'past' : (i === nextIdx ? 'next' : '');
        return `<div class="train-row ${cls}">
      <div class="t-dep">${display(t.dep)}</div>
      <div class="arrow">→</div>
      <div class="t-arr">${display(t.arr)}</div>
      <div class="dur">durasi<strong>${fmtDur(t.durMin)}</strong></div>
    </div>`;
      }).join('');
    }

    function updateClockNote() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0');
      document.getElementById('clockNote').textContent = `Jam perangkat Anda saat ini: ${hh}.${mm} — dipakai untuk menandai kereta berikutnya.`;
    }

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        dir = tab.dataset.dir;
        populateSelects();
        render();
      });
    });
    document.getElementById('swap').addEventListener('click', () => {
      const otherTab = dir === "jogjaSolo" ? "soloJogja" : "jogjaSolo";
      document.querySelector(`.tab[data-dir="${otherTab}"]`).click();
    });
    originSel.addEventListener('change', () => { fillDest(); render(); });
    destSel.addEventListener('change', render);

    populateSelects();
    updateClockNote();
    render();
    setInterval(() => { updateClockNote(); render(); }, 30000);