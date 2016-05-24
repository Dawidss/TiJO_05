describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return false when string is not palidrome', function () {
            expect(app.generateMessage('sda')).toEqual({vowel: 1, palindrome: false});
            expect(app.generateMessage('kasa')).toEqual({vowel: 2, palindrome: false});
        });
        it('should retrun cunt vowels and function is true because is palidnrom ', function () {
            expect(app.generateMessage("alaala")).toEqual({vowel: 4, palindrome: true});
            expect(app.generateMessage("ala")).toEqual({vowel: 2, palindrome: true});
        });
        it('should return false when string is empty', function () {
            expect(function () {
                app.generateMessage('')
            }).toThrowError("Empty string!");
        })
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome');
                app.isPalindrome("ola");
            });
            it('should call isPalindrome function', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app,'isPalindrome').and.callThrough();
                app.generateMessage('sts');

            });
            it('should call with ispaldifrom and vovelvcount when called is function generatemesgae', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('sts');
            })
        });

        describe('and.returnValue', function () {
            var returns;
            beforeAll(function () {
                spyOn(app,'isPalindrome').and.returnValue(true);
            });
            it('should call generateMessage and return value{2,true}', function () {
                returns = app.generateMessage("olo");
                expect(returns).toEqual({vowel: 2, palindrome: true});
                returns = app.generateMessage("wlw");
                expect(returns).toEqual({vowel: 0, palindrome: true});
            })
            it('should call ispalidnrom and return value true', function () {
                returns = app.isPalindrome('olo');
                expect(returns).toEqual(true);
            })
        });

        describe('and.callFake', function () {
            var returnes;
            beforeAll(function () {
                spyOn(app,'isPalindrome').and.callFake(function () {
                    return "IT is Fake";
                });
            });
            it('should return fake function because is spy callFake', function () {
                returnes = app.isPalindrome('olo');
                expect(returnes).toEqual("IT is Fake");
            });
            it('should notice ispaldidrom that called second function generatemesage at the same time', function () {
                returnes = app.generateMessage('alaha');
                expect(returnes).toEqual({ vowel: 3, palindrome: 'IT is Fake' });
            })
        });

        describe('calls.count()', function () {
            var returnuje
            beforeAll(function () {
                spyOn(app,'isPalindrome').and.callThrough();
            });
            it('should call ispalidrome and count spay', function () {
                returnuje = app.isPalindrome('olo');
                returnuje = app.isPalindrome('s');
                expect(app.isPalindrome.calls.count()).toBe(2);
            });
            it('should notice ispalidrome called second function generateMessage when is called', function () {
                returnuje = app.generateMessage("ola");
                expect(app.isPalindrome.calls.count()).toBe(3)

            })
        });

    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app,'vowelCount');
                app.vowelCount('ola');
            });
            it('should call vowelCount function', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith("ola")
            })
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app,'vowelCount').and.callThrough();
                app.generateMessage("ala");
            });
            it('should call vowelcount and vowelcount works when function generetemesega is called ', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.returnValue', function () {
            var returns;
            beforeAll(function () {
                spyOn(app,'vowelCount').and.returnValue(2);
            });
            it('should call genereate return value{2,true)', function () {
                expect(app.generateMessage('zaraz')).toEqual({vowel: 2, palindrome: true});
            });
            it('should call voveltcout and return value 2', function () {
                expect(app.vowelCount('ala')).toEqual(2)
            })
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app,'vowelCount').and.callFake(function () {
                    return 12;
                });
            });
            it('should call vovwelcount and sceond generatemesage and return value(12,true)', function () {
                expect(app.generateMessage('ala')).toEqual({ vowel: 12, palindrome: true });
            });
            it('should call vowel count and return value 12', function () {
                expect(app.vowelCount('ola')).toEqual(12)
            })
        });

        describe('calls.count()', function () {
            var wywolanie;
            beforeAll(function () {
                spyOn(app,'vowelCount').and.callThrough();
            });
            it('should call vowelcount', function () {
                wywolanie = app.vowelCount('alahagbar');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should call vowelcount and  at the same time  call with scecond function generatemesage ', function () {
                wywolanie = app.generateMessage('asd');
                wywolanie = app.generateMessage('asssssssd');
                expect(app.vowelCount.calls.count()).toBe(3);
            })
        });

    });
});