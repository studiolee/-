@echo offecho.&echo.&echo ˵����
echo.&echo ʹ�ñ�bat�ļ���ȫ�̲��������ļ����µ�ָ���ļ�
echo.&echo.&echo.
set hcy=
set /p hcy= �����루1Ϊ��ȷ���ң�2Ϊģ�����ң���
if %hcy%==1 goto jqf
if %hcy%==2 goto mhf
goto findfile
:jqf
echo.&set hcy=
set /p hcy= ������Ҫ���ҵ��ļ�����������׺��
for %%i in (c d e f g h i j k l m n o p q r s t u v w x y z) do dir /s /b %%i:\"%hcy%" >>list.txt 2>nul
echo.&echo.&echo.&echo ����ɹ�����鿴��list.txt���ļ���������������˵���
pause>nul&goto start
:mhf
echo.&set hcy=
set /p hcy= ������Ҫ���ҵ��ļ����ַ���
for %%i in (c d e f g h i j k l m n o p q r s t u v w x y z) do dir /s /b %%i:\"*%hcy%*".* >>list.txt 2>nul
echo.&echo.&echo.&echo ����ɹ�����鿴��list.txt���ļ���������������˵���
pause>nul