:: 경로
set _dir=C:\elk_input


:: 데이터팀 import
copy %_dir%\data\*.csv %_dir%\data\bak\
move %_dir%\data\*.csv %_dir%\data\processing\
forfiles /p %_dir%\data\bak /m *.csv /d -3 /c "cmd /c del @file"

:: 모델팀 import
copy %_dir%\coin\*.csv %_dir%\coin\bak\
move %_dir%\coin\*.csv %_dir%\coin\processing\
forfiles /p %_dir%\coin\bak /m *.csv /d -3 /c "cmd /c del @file"