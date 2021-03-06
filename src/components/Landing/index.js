import React from 'react';
import './landing.css';
import { Switch, Card, Button } from 'antd';
import styled from 'styled-components';

const beginning = ["kat", "tas", "gam", "gas", "baf", "daf", "sab", "shar", "tab", "sas", "sak", "khak", "rak", "har", "dal", "sah", "raf", "thal", "rak", "nad", "shag", "las", "nak", "naf", "shan", "shan", "sat", "sak", "lah", "rag", "rag", "sar", "kat", "gas", "rak", "ral", "ban", "shad", "dak", "shal", "saf", "nam", "bak", "khaf", "bas", "bad", "bah", "shad", "sam", "laf", "hat", "rab", "lam", "rar", "khab", "gan", "thag", "rah", "hak", "khal", "khad", "har", "nar", "thak", "mal", "kak", "tal", "lat", "sham", "sah", "kas", "rab", "thag", "dab", "thak", "tab", "bas", "dan", "kag", "lan", "nak", "kak", "taf", "tah", "thah", "shah", "mab", "dad", "rah", "bas", "kak", "lal", "dan", "hat", "sar", "mak", "rag", "daf", "hab", "had", "thal", "fan", "ham", "sah", "nag", "fat", "thag", "mag", "rad", "has", "ran", "nam", "tam", "mas", "ral", "rag", "rak", "dab", "rah", "nal", "fas", "gad", "das", "shas", "kag", "fad", "fah", "ban", "bal", "bal", "dab", "rat", "bal", "bas", "bam", "kaf", "nat", "gat", "lam", "sham", "rar", "faf", "lar", "rah", "mam", "mah", "gak", "bah", "khar", "thal", "mar", "shaf", "mab", "gaf", "lat", "thab", "thaf", "fan", "raf", "shat", "fan", "maf", "rad", "fan", "lan", "than", "shar", "bar", "thab", "had", "kag", "shat", "rat", "daf", "san", "tah", "ras", "sag", "rak", "daf", "nar", "sam", "has", "sad", "bak", "las", "bam", "san", "fab", "khas", "lag", "fal", "kar", "that", "khas", "thag", "sal", "kah", "thak", "mab", "kas", "han", "mat", "gas", "laf", "tar", "tar", "baf", "gan", "dad", "har", "mad", "lab", "tar", "dar", "faf", "tab", "saf", "thag", "khan", "dar", "sab", "khah", "shal", "khar", "kan", "gak", "thab", "gam", "tal", "fad", "kak", "khad", "mag", "nal", "kah", "thaf", "lab", "fag", "shaf", "rak", "khaf", "tham", "bag", "laf", "sak", "lar", "faf", "thak", "khaf", "hab", "fah", "kak", "kah", "lan", "khab", "far", "ham", "gaf", "gaf", "hab", "kan", "tar", "daf", "sab", "nan", "mat", "tar", "gaf", "shaf", "han", "dad", "dad", "gas", "kan", "lan", "sam", "thas", "han", "khat", "had", "khad", "gah", "nab", "than", "bag", "lab", "bas", "hal", "hab", "gas", "shah", "raf", "shat", "gan", "gak", "hat", "baf", "bag", "nah", "shah", "kat", "dal", "hak", "mat", "laf", "shad", "bam", "gar", "rah", "tam", "laf", "tar", "that", "lan", "sak", "thaf", "lat", "rab", "kham", "lad", "fak", "gal", "thad", "fan", "has", "fan", "far", "nag", "kak", "nan", "kak", "gas", "daf", "fal", "kah", "had", "far", "rag", "shas", "kham", "fab", "sag", "gas", "sab", "kag", "las", "shan", "kal", "kat", "dar", "mad", "lag", "fat", "sat", "fak", "fan", "saf", "khar", "tar", "hah", "mak", "shan", "sal", "nam", "gak", "gam", "kal", "das", "rar", "baf", "fal", "sak", "gab", "khag", "ban", "kak", "bal", "sal", "mah", "tad", "than", "hag", "ban", "taf", "lak", "kat", "mak", "rar", "shat", "gan", "fam", "kam", "bam", "khar", "maf", "nal", "rad", "bat", "dah", "nah", "gan", "lag", "dal", "kab", "ram", "ham", "han", "ras", "han", "shad", "lad", "hag", "taf", "hab", "fab", "rar", "gas", "bag", "kan", "fat", "nah", "rak", "khar", "than", "hab", "hab", "daf", "nal", "kam", "gat", "fag", "hab", "hat", "kak", "tas", "ham", "rab", "lar", "nar", "thad", "fal", "sar", "dak", "lak", "gab", "bam", "nam", "fag", "far", "das", "khar", "thar", "lab", "lar", "khab", "dad", "bab", "thak", "tak", "ram", "fag", "shaf", "rab", "lak", "bak", "shaf", "ban", "shad", "kam", "rar", "lak", "gad", "fal", "gak", "bat", "lad", "thal", "thad", "mat", "rad", "lan", "tak", "fab", "hag", "khat", "thar", "gam", "mar", "has", "than", "raf", "fal", "hag", "sas", "sham", "lag", "bas", "nal", "shah", "gan", "bar", "fah", "mar", "had", "gag", "thas", "khat", "man", "shat", "ran", "ram", "than", "gag", "mad", "sar", "lad", "ral", "hah", "gag", "kar", "shas", "sak", "kat", "tah", "gaf", "faf", "bah", "thag", "kah", "fad", "tad", "nak", "fad", "kham", "san", "tak", "man", "tar", "saf", "lar", "tad", "taf", "sak", "tas", "shat", "tat", "mab", "rah", "shag", "that", "mad", "daf", "khah", "tab", "hah", "dag", "rad", "dat", "lat", "sar", "daf", "nag", "sham", "lan", "thak", "shal", "nar", "dar", "thab", "han", "naf", "lab", "far", "shal", "nad", "shak", "lag", "gad", "mab", "lab", "tam", "tal", "nas", "gal", "gaf", "mab", "nam", "nal", "khar", "sah", "nal", "bat", "gat", "has", "kal", "kan", "nar", "nam", "nag", "fik", "fih", "shid", "fif", "nis", "hik", "bik", "hil", "fir", "rim", "dil", "rik", "lid", "sim", "tih", "bir", "shir", "rib", "fil", "gik", "kih", "khin", "gir", "khik", "gim", "kis", "shid", "kik", "khig", "kin", "shim", "hid", "nit", "gil", "gih", "thih", "shid", "nif", "fik", "tif", "fit", "ril", "mib", "gim", "sib", "shil", "gil", "his", "bif", "thid", "sit", "sin", "thih", "dir", "thig", "dir", "dil", "til", "gif", "dib", "lim", "nib", "shis", "kim", "rik", "thig", "fib", "big", "khih", "rih", "gin", "thil", "rib", "mim", "hib", "shin", "kim", "sig", "rib", "ris", "lis", "sif", "nih", "sim", "bim", "kin", "kig", "hib", "hil", "nir", "dit", "shim", "dil", "fif", "shit", "tib", "nit", "rit", "shib", "tif", "lim", "gih", "lif", "mit", "fin", "him", "lis", "shif", "kit", "mim", "dir", "mif", "gik", "fib", "tir", "gih", "sid", "bis", "sin", "thif", "thin", "thih", "sim", "thig", "khit", "min", "thin", "lis", "shis", "did", "sil", "nil", "bif", "mim", "fim", "rik", "shib", "shir", "bir", "dit", "mig", "lit", "mib", "sig", "gin", "sig", "kim", "shig", "nim", "shit", "mig", "fil", "nib", "hih", "tik", "mis", "gik", "tig", "khin", "hih", "khir", "rir", "lig", "dir", "gir", "thir", "kib", "gid", "fis", "nik", "fit", "shis", "hin", "khit", "shib", "nil", "fib", "khid", "shis", "hik", "gis", "mir", "mig", "gif", "khin", "fim", "lin", "dim", "nid", "kim", "hib", "ril", "lir", "tim", "ril", "sim", "nif", "fig", "nik", "sin", "mih", "thik", "sin", "sim", "ril", "lin", "sih", "nik", "shim", "tik", "mib", "lid", "did", "lir", "din", "mim", "mir", "khim", "khim", "sil", "kin", "lir", "mik", "kib", "sib", "khim", "did", "sif", "kir", "tir", "nig", "lig", "fih", "nit", "khif", "dis", "rib", "sim", "gil", "lik", "gim", "mif", "gig", "nik", "kis", "lih", "rib", "hig", "shim", "rif", "dim", "hig", "hih", "shit", "dik", "hin", "nif", "gih", "rig", "kin", "nit", "tis", "fis", "thih", "fig", "thih", "fid", "gib", "kis", "bis", "ril", "kif", "lis", "hir", "mig", "this", "mid", "tim", "tis", "hih", "bil", "thif", "shif", "thib", "tif", "sil", "shik", "kis", "dih", "lit", "thif", "sin", "his", "shik", "dif", "mid", "khig", "bit", "kir", "khim", "sil", "gis", "nik", "kil", "dih", "tim", "big", "bik", "kid", "khin", "gid", "sin", "did", "khid", "mis", "fis", "thin", "lih", "nig", "thib", "shis", "tif", "mik", "gif", "khir", "shih", "nib", "sit", "tib", "kib", "khis", "bit", "bir", "lin", "shir", "rih", "thir", "gir", "nig", "lir", "rin", "sil", "dis", "shit", "nid", "shib", "kih", "gik", "nif", "dih", "mis", "hil", "min", "gig", "dih", "ril", "kir", "tis", "hib", "tif", "rif", "lim", "sih", "thim", "fis", "khit", "sib", "nir", "khib", "thim", "sib", "nih", "shib", "hid", "thir", "gin", "nil", "bis", "khir", "fig", "him", "khis", "nir", "nin", "fig", "thih", "rit", "shig", "tif", "thig", "fik", "ril", "rit", "thif", "mih", "nis", "khis", "nib", "shil", "lif", "dir", "nis", "mis", "sit", "gib", "shig", "dil", "rig", "thin", "kik", "hig", "nin", "bit", "bir", "thim", "fir", "shil", "nib", "git", "mir", "gis", "khig", "din", "mih", "rih", "bit", "shid", "sih", "til", "fil", "bil", "kid", "rit", "fir", "rit", "mik", "bir", "khib", "fil", "tit", "fid", "rig", "mih", "kir", "hin", "nit", "khin", "gif", "thir", "kir", "rit", "tih", "kif", "khin", "nit", "shin", "shif", "ril", "nig", "kin", "mim", "bif", "fib", "nin", "rih", "khib", "sig", "thif", "khik", "tih", "khig", "kit", "nim", "lir", "rir", "kim", "kif", "dig", "gih", "sif", "shig", "mil", "fig", "lil", "rih", "khis", "sig", "thig", "tid", "sif", "khin", "bir", "khih", "hid", "nif", "thit", "kib", "nis", "kik", "thik", "fid", "khik", "khit", "lih", "khik", "tih", "bim", "nib", "ris", "mik", "tis", "nih", "fim", "mik", "nif", "hil", "kit", "gif", "bir", "thil", "hin", "nib", "sir", "shif", "khih", "kig", "kit", "gil", "shit", "khib", "dig", "kib", "big", "shig", "mib", "rih", "fif", "khig", "shig", "hit", "khis", "thif", "nil", "lif", "tid", "mid", "mim", "fit", "lig", "nin", "shil", "kir", "mik", "fim", "lid", "gik", "rin", "hih", "tih", "thik", "shim", "shis", "sib", "mit", "dik", "bih", "sir", "nif", "lib", "tim", "him", "mib", "lif", "gik", "khil", "lil", "nin", "gid", "sil", "rig", "bih", "lir", "khin", "bis", "nim", "gih", "kin", "nil", "dir", "khib", "gih", "gib", "lig", "khig", "kig", "hin", "fig", "rib", "nil", "khis"];
const middle = ["fon", "son", "shog", "gok", "gom", "kob", "toh", "gol", "nos", "tog", "khor", "shos", "lod", "boh", "sol", "koh", "ron", "khol", "lom", "thok", "thok", "bol", "khok", "bof", "fog", "kot", "thoh", "tod", "bos", "los", "tom", "rog", "bog", "moh", "fod", "nof", "ton", "khog", "khos", "kog", "kok", "sol", "lor", "gos", "gof", "got", "shol", "hom", "mon", "khok", "nof", "rom", "fod", "thod", "gom", "shor", "goh", "nof", "gob", "gog", "mot", "khok", "hok", "gok", "khom", "khor", "goh", "kob", "not", "nof", "thob", "thoh", "gof", "mos", "bon", "dol", "dog", "khos", "bor", "kof", "thod", "gob", "thod", "fod", "bos", "don", "rob", "tod", "fob", "dos", "gol", "don", "sof", "bod", "dot", "khod", "bom", "bos", "mof", "hom", "dom", "mob", "thol", "sok", "bon", "kok", "sol", "son", "thof", "goh", "tok", "khok", "tol", "dod", "dor", "kol", "hos", "bog", "shof", "lor", "kol", "tot", "kob", "tom", "lor", "shob", "rog", "thor", "son", "thol", "ron", "lok", "sok", "god", "hol", "gof", "fos", "tof", "dos", "khok", "khok", "kof", "khok", "bos", "bol", "thos", "shoh", "bon", "mol", "bok", "shor", "thok", "mol", "lol", "thoh", "gos", "dol", "thof", "lot", "roh", "ror", "khom", "shom", "non", "god", "bot", "thot", "tok", "mol", "shok", "fob", "dot", "sol", "tok", "got", "hos", "gof", "shor", "shon", "shom", "bob", "rog", "bob", "mot", "bof", "tor", "rol", "god", "khot", "gom", "mor", "thol", "khoh", "hom", "kos", "moh", "fon", "mob", "gok", "bob", "bod", "rol", "goh", "god", "fos", "gon", "mot", "lok", "rot", "khot", "shod", "hor", "tom", "khom", "gom", "dok", "nod", "shob", "lok", "tob", "shob", "rod", "nos", "gol", "sol", "tof", "got", "gof", "shon", "boh", "foh", "thod", "sor", "lof", "kom", "sol", "nom", "mot", "dos", "sod", "nom", "khos", "nom", "khon", "shom", "hod", "hor", "got", "boh", "kot", "loh", "sor", "shos", "fol", "hor", "mol", "gof", "nos", "bon", "kon", "khon", "hot", "bor", "not", "hoh", "khod", "nos", "kom", "fod", "fom", "nod", "toh", "mod", "hog", "kog", "lok", "nom", "sob", "kob", "thob", "thor", "rok", "nog", "fom", "gor", "mor", "sol", "lob", "kom", "noh", "dol", "fog", "got", "kod", "kor", "mob", "khor", "kon", "thok", "lon", "rol", "lon", "khoh", "bof", "rog", "los", "noh", "bog", "bob", "fok", "shot", "nof", "khog", "hol", "lom", "roh", "dof", "shon", "hoh", "don", "hod", "shod", "rog", "kog", "som", "khok", "fot", "fog", "bol", "lob", "log", "thob", "dof", "shon", "rog", "khol", "bob", "mom", "kol", "dof", "bor", "foh", "hof", "dol", "gob", "nor", "fon", "dod", "thod", "sog", "lok", "tom", "sok", "shob", "fol", "rot", "gos", "los", "rod", "hom", "hob", "thof", "nom", "for", "sok", "hor", "mof", "thob", "shob", "sob", "ron", "khob", "shom", "fok", "shoh", "mod", "hof", "thot", "tok", "thom", "tom", "kol", "nob", "mob", "bof", "khon", "rod", "rok", "shot", "thor", "thol", "rom", "gon", "fot", "shob", "rob", "non", "hor", "log", "sof", "tof", "dok", "rob", "nor", "thor", "soh", "kom", "gon", "shob", "lod", "sol", "hos", "hoh", "kom", "nod", "gon", "thot", "lod", "shos", "tot", "non", "bos", "tob", "shot", "khos", "mob", "sot", "kor", "hoh", "kos", "toh", "gog", "bok", "lom", "tof", "thog", "som", "shol", "bos", "dod", "khoh", "tob", "tof", "hol", "kof", "mot", "thod", "kom", "hor", "fok", "shor", "thok", "shoh", "sod", "rom", "sor", "rol", "gof", "nos", "rof", "koh", "hog", "tog", "ton", "shor", "nog", "mog", "hol", "got", "gok", "thom", "khos", "lor", "sol", "nor", "lol", "fok", "dob", "koh", "nog", "rot", "nos", "shod", "gog", "rob", "lof", "thob", "khon", "hof", "hob", "doh", "nok", "bok", "lon", "tom", "gol", "dof", "tom", "thor", "rok", "nol", "rom", "rog", "hol", "koh", "lof", "shog", "tos", "mot", "khom", "lok", "nol", "kok", "gos", "sof", "ton", "dod", "khob", "nok", "non", "nos", "hod", "kot", "fon", "khon", "thon", "not", "khot", "rof", "shom", "thol", "mob", "mot", "tog", "tot", "tom", "kok", "nob", "khol", "hok", "dot", "thom", "lot", "bot", "god", "roh", "hon", "nod", "kom", "kog", "tok", "foh", "shob", "khob", "nok", "khoh", "thoh", "thok", "lon", "hod", "rob", "shob", "lod", "mom", "nor", "kot", "shol", "bon", "gon", "thok", "dog", "bol", "tod", "khok", "mos", "fod", "gos", "sog", "som", "fos", "koh", "gos", "shom", "ron", "hot", "rol", "thor", "gos", "kof", "hob", "tok", "dod", "bok", "khol", "soh", "koh", "sof", "nof", "ros", "gof", "fik", "fih", "shid", "fif", "nis", "hik", "bik", "hil", "fir", "rim", "dil", "rik", "lid", "sim", "tih", "bir", "shir", "rib", "fil", "gik", "kih", "khin", "gir", "khik", "gim", "kis", "shid", "kik", "khig", "kin", "shim", "hid", "nit", "gil", "gih", "thih", "shid", "nif", "fik", "tif", "fit", "ril", "mib", "gim", "sib", "shil", "gil", "his", "bif", "thid", "sit", "sin", "thih", "dir", "thig", "dir", "dil", "til", "gif", "dib", "lim", "nib", "shis", "kim", "rik", "thig", "fib", "big", "khih", "rih", "gin", "thil", "rib", "mim", "hib", "shin", "kim", "sig", "rib", "ris", "lis", "sif", "nih", "sim", "bim", "kin", "kig", "hib", "hil", "nir", "dit", "shim", "dil", "fif", "shit", "tib", "nit", "rit", "shib", "tif", "lim", "gih", "lif", "mit", "fin", "him", "lis", "shif", "kit", "mim", "dir", "mif", "gik", "fib", "tir", "gih", "sid", "bis", "sin", "thif", "thin", "thih", "sim", "thig", "khit", "min", "thin", "lis", "shis", "did", "sil", "nil", "bif", "mim", "fim", "rik", "shib", "shir", "bir", "dit", "mig", "lit", "mib", "sig", "gin", "sig", "kim", "shig", "nim", "shit", "mig", "fil", "nib", "hih", "tik", "mis", "gik", "tig", "khin", "hih", "khir", "rir", "lig", "dir", "gir", "thir", "kib", "gid", "fis", "nik", "fit", "shis", "hin", "khit", "shib", "nil", "fib", "khid", "shis", "hik", "gis", "mir", "mig", "gif", "khin", "fim", "lin", "dim", "nid", "kim", "hib", "ril", "lir", "tim", "ril", "sim", "nif", "fig", "nik", "sin", "mih", "thik", "sin", "sim", "ril", "lin", "sih", "nik", "shim", "tik", "mib", "lid", "did", "lir", "din", "mim", "mir", "khim", "khim", "sil", "kin", "lir", "mik", "kib", "sib", "khim", "did", "sif", "kir", "tir", "nig", "lig", "fih", "nit", "khif", "dis", "rib", "sim", "gil", "lik", "gim", "mif", "gig", "nik", "kis", "lih", "rib", "hig", "shim", "rif", "dim", "hig", "hih", "shit", "dik", "hin", "nif", "gih", "rig", "kin", "nit", "tis", "fis", "thih", "fig", "thih", "fid", "gib", "kis", "bis", "ril", "kif", "lis", "hir", "mig", "this", "mid", "tim", "tis", "hih", "bil", "thif", "shif", "thib", "tif", "sil", "shik", "kis", "dih", "lit", "thif", "sin", "his", "shik", "dif", "mid", "khig", "bit", "kir", "khim", "sil", "gis", "nik", "kil", "dih", "tim", "big", "bik", "kid", "khin", "gid", "sin", "did", "khid", "mis", "fis", "thin", "lih", "nig", "thib", "shis", "tif", "mik", "gif", "khir", "shih", "nib", "sit", "tib", "kib", "khis", "bit", "bir", "lin", "shir", "rih", "thir", "gir", "nig", "lir", "rin", "sil", "dis", "shit", "nid", "shib", "kih", "gik", "nif", "dih", "mis", "hil", "min", "gig", "dih", "ril", "kir", "tis", "hib", "tif", "rif", "lim", "sih", "thim", "fis", "khit", "sib", "nir", "khib", "thim", "sib", "nih", "shib", "hid", "thir", "gin", "nil", "bis", "khir", "fig", "him", "khis", "nir", "nin", "fig", "thih", "rit", "shig", "tif", "thig", "fik", "ril", "rit", "thif", "mih", "nis", "khis", "nib", "shil", "lif", "dir", "nis", "mis", "sit", "gib", "shig", "dil", "rig", "thin", "kik", "hig", "nin", "bit", "bir", "thim", "fir", "shil", "nib", "git", "mir", "gis", "khig", "din", "mih", "rih", "bit", "shid", "sih", "til", "fil", "bil", "kid", "rit", "fir", "rit", "mik", "bir", "khib", "fil", "tit", "fid", "rig", "mih", "kir", "hin", "nit", "khin", "gif", "thir", "kir", "rit", "tih", "kif", "khin", "nit", "shin", "shif", "ril", "nig", "kin", "mim", "bif", "fib", "nin", "rih", "khib", "sig", "thif", "khik", "tih", "khig", "kit", "nim", "lir", "rir", "kim", "kif", "dig", "gih", "sif", "shig", "mil", "fig", "lil", "rih", "khis", "sig", "thig", "tid", "sif", "khin", "bir", "khih", "hid", "nif", "thit", "kib", "nis", "kik", "thik", "fid", "khik", "khit", "lih", "khik", "tih", "bim", "nib", "ris", "mik", "tis", "nih", "fim", "mik", "nif", "hil", "kit", "gif", "bir", "thil", "hin", "nib", "sir", "shif", "khih", "kig", "kit", "gil", "shit", "khib", "dig", "kib", "big", "shig", "mib", "rih", "fif", "khig", "shig", "hit", "khis", "thif", "nil", "lif", "tid", "mid", "mim", "fit", "lig", "nin", "shil", "kir", "mik", "fim", "lid", "gik", "rin", "hih", "tih", "thik", "shim", "shis", "sib", "mit", "dik", "bih", "sir", "nif", "lib", "tim", "him", "mib", "lif", "gik", "khil", "lil", "nin", "gid", "sil", "rig", "bih", "lir", "khin", "bis", "nim", "gih", "kin", "nil", "dir", "khib", "gih", "gib", "lig", "khig", "kig", "hin", "fig", "rib", "nil", "khis"];
const end = ["ia", "ios", "idel", "ian", "iri", "i", "o", "ene", "erti", "on", "im", "adel", "ingo", "ica", "us"];


class Generator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            genderState: true,
            stringOutput: "",

        };
        this.generate = this.generate.bind(this);
    }

    generate = () => {
        console.table(this.state);
        this.state.stringOutput ="";
        if(this.state.disabled) {
            for(let i = 0; i < 2000; i++) {
                this.state.stringOutput += AlgorithmAll() + "" +
                    "\n";
            }
        }
        else {
            if(this.state.genderState) {
                AlgorithmMale();
            }
            else{
                AlgorithmFemale();
            }
        }
        alert(this.state.stringOutput);
    };
    gender = () => {
        this.setState({
            genderState: !this.state.genderState,
        })
    };

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,

        });
    };

    render() {
        return (
            <div>
                <Card title={"Configure Generator"}>
                    <Switch disabled={this.state.disabled} onClick={this.gender} defaultChecked={"checked"} checkedChildren={"Male Name"} unCheckedChildren={"Female Name"}>Male</Switch>
                    <br />
                    <Button type="danger" onClick={this.toggle}>
                        All names
                    </Button>
                    <Button type={"primary"} onClick={this.generate}>Generate</Button>
                </Card>
                <Card title={"Output"}>
                    <p>{this.state.stringOutput}</p>
                </Card>
            </div>
        );
    }
}

/**
 * @return {string}
 */
function AlgorithmAll() {
    let b = Math.trunc(Math.random() * beginning.length);
    let m = Math.trunc(Math.random() * middle.length);
    let e = Math.trunc(Math.random() * end.length);
    return beginning[b] + middle[m] + end[e];
}

function AlgorithmMale() {
}
function AlgorithmFemale() {
}

const Landing = () => (
    <div className={"all"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Name Generator</h1>
        </div>
        <div className={"content"}>
            <Generator/>
        </div>
    </div>
);

export default Landing;
