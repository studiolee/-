@echo offecho.&echo.&echo 说明：
echo.&echo 使用本bat文件可全盘查找所有文件夹下的指定文件
echo.&echo.&echo.
set hcy=
set /p hcy= 请输入（1为精确查找，2为模糊查找）：
if %hcy%==1 goto jqf
if %hcy%==2 goto mhf
goto findfile
:jqf
echo.&set hcy=
set /p hcy= 请输入要查找的文件名，包含后缀：
for %%i in (c d e f g h i j k l m n o p q r s t u v w x y z) do dir /s /b %%i:\"%hcy%" >>list.txt 2>nul
echo.&echo.&echo.&echo 输出成功，请查看“list.txt”文件；任意键返回主菜单！
pause>nul&goto start
:mhf
echo.&set hcy=
set /p hcy= 请输入要查找的文件名字符：
for %%i in (c d e f g h i j k l m n o p q r s t u v w x y z) do dir /s /b %%i:\"*%hcy%*".* >>list.txt 2>nul
echo.&echo.&echo.&echo 输出成功，请查看“list.txt”文件；任意键返回主菜单！
pause>nul